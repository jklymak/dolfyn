import numpy as np
from ..tools.psd import psd_freq,cohere,psd,cpsd_quasisync
from ..tools.misc import slice1d_along_axis
from scipy.signal import detrend
from base import Dprops,ma,rad_hz,time_based,Dgroups
from io import saveable
import copy

class time_bindat(time_based):
    """
    A base, abstract class for binned data.

    """
    @property
    def freq(self,):
        return self.omega/rad_hz


class time_binner(object):
    
    def calc_omega(self,fs,coh=False):
        """
        Calculate the radial-frequency vector for the psd's.

        Parameters
        ----------
        *coh*  : Calculate the frequency vector for coherence/cross-spectra (default: False)
                 i.e. use self.n_fft_coh instead of self.n_fft.
        """
        n_fft=self.n_fft
        freq_dim='freq'
        if coh:
            n_fft=self.n_fft_coh
            freq_dim='coh_freq'
        dat=ma.marray(psd_freq(n_fft,fs*2*np.pi),ma.varMeta('\omega',{'s':-1},[freq_dim]))
        return dat

    def _outshape(self,inshape,n_pad=0,n_bin=None):
        """
        Returns *outshape* (the 'reshape'd shape) for an *inshape* array.
        """
        n_bin=int(self._parse_nbin(n_bin))
        return list(inshape[:-1])+[inshape[-1]/n_bin,n_bin+n_pad]

    def _outshape_fft(self,inshape,n_fft=None,n_bin=None):
        """
        Returns *outshape* (the fft 'reshape'd shape) for an *inshape* array.
        """
        n_fft=self._parse_nfft(n_fft)
        n_bin=self._parse_nbin(n_bin)
        return list(inshape[:-1])+[inshape[-1]/n_bin,n_fft/2]

    def _parse_nbin(self,n_bin=None):
        if n_bin is None:
            return self.n_bin
        return n_bin

    def _parse_nfft(self,n_fft=None):
        if n_fft is None:
            return self.n_fft
        return n_fft

    def reshape(self,arr,n_pad=0,n_bin=None):
        """
        Reshape the array *arr* to shape (...,n,n_bin+n_pad).

        n_bin is specified in the adv_binned object.  Create a different adv_binned object to use a different n_bin.
        n is fix(len(arr)/n_bin)
        
        *n_pad* may be used to add *n_pad*/2 points from the end of the previous ensemble
        to the top of the current, and *n_pad*/2 points from the top of the next ensemble
        to the bottom of the current.  Zeros are padded in the upper-left and lower-right
        corners of the matrix (beginning/end of timeseries).
        In this case, the array shape will be (...,*n*,*n_pad*+*n_bin*)

        *n_bin* can be non-integer, in which case the output array size will have size
        *n_pad*+*n_bin*, and the decimal will cause skipping of some data points in *arr*.
        In particular, every mod(n_bin,1) bins will have a skipped point. For example:
           for n_bin=2048.2 every 1/5 bins will have a skipped point.
           for n_bin=4096.9 every 9/10 bins will have a skipped point.
        """
        n_bin=self._parse_nbin(n_bin)
        npd0=n_pad/2
        npd1=(n_pad+1)/2
        shp=self._outshape(arr.shape,n_pad=0,n_bin=n_bin)
        out=np.zeros(self._outshape(arr.shape,n_pad=n_pad,n_bin=n_bin),dtype=arr.dtype)
        if np.mod(n_bin,1)==0: # If n_bin is an integer, we can do this simply...
            out[...,npd0:n_bin+npd0]=arr[...,:(shp[-2]*shp[-1])].reshape(shp,order='C')
        else:
            inds=(np.arange(np.prod(shp[-2:]))*n_bin/int(n_bin)).astype(int)
            out[...,npd0:int(n_bin)+npd0]=arr[...,inds].reshape(shp,order='C')
            n_bin=int(n_bin) # n_bin needs to be int for the n_pad operation.
        if n_pad!=0:
            out[...,1:,:npd0]=out[...,:-1,n_bin:n_bin+npd0]
            out[...,:-1,-npd1:]=out[...,1:,npd0:npd0+npd1]
        if ma.valid and out.__class__ is ma.marray:
            out.meta.dim_names+=['time2']
        return out
    
    def detrend(self,dat,n_pad=0,n_bin=None):
        """
        Reshape the array *dat* and remove the best-fit trend line.

        ... Need to fix this to deal with NaNs...
        """
        return detrend(self.reshape(dat,n_pad=n_pad,n_bin=n_bin),axis=-1,type='linear')

    def demean(self,dat,n_pad=0,n_bin=None):
        """
        Reshape the array *dat* and remove the mean from each ensemble.
        """
        dt=self.reshape(dat,n_pad=n_pad,n_bin=n_bin)
        return dt-(dt.mean(-1)[...,None])

    def mean(self,dat,n_bin=None):
        return self.reshape(dat,n_bin=n_bin).mean(-1)

    def std(self,dat,n_bin=None):
        return self.reshape(dat,n_bin=n_bin).std(-1)

    def calc_acov(self,indat,n_bin=None):
        """
        Calculate the auto-covariance of the raw-signal *indat*.

        As opposed to calc_xcov, which returns the full cross-covariance between two
        arrays, this function only returns a quarter of the full auto-covariance. It
        computes the auto-covariance over half of the range, then averages the two
        sides (to return a 'quartered' covariance).

        This has the advantage that the 0 index is actually zero-lag.
        
        """
        n_bin=self._parse_nbin(n_bin)
        out=np.empty(self._outshape(indat.shape,n_bin=n_bin)[:-1]+[n_bin/4],dtype=indat.dtype)
        dt1=self.reshape(indat,n_pad=n_bin/2-2)
        # Here we de-mean only on the 'valid' range:
        dt1=dt1-dt1[...,:,n_bin/4:-n_bin/4].mean(-1)[...,None]
        dt2=self.demean(indat) # Don't pad the second variable.
        dt2=dt2-dt2.mean(-1)[...,None]
        for slc in slice1d_along_axis(dt1.shape,-1):
            tmp=np.correlate(dt1[slc],dt2[slc],'valid')
            # The zero-padding in reshape means we compute coherence
            # from one-sided time-series for first and last points.
            if slc[-2]==0:
                out[slc]=tmp[n_bin/4-1:]
            elif slc[-2]==dt2.shape[-2]-1:
                out[slc]=tmp[n_bin/4-1::-1]
            else:
                # For the others we take the average of the two sides.
                out[slc]=(tmp[n_bin/4-1:]+tmp[n_bin/4-1::-1])/2
        return out

    def calc_lag(self,npt=None,one_sided=False):
        if npt is None:
            npt=n_bin
        if one_sided:
            return np.arange(npt/2,dtype=np.float32)
        else:
            return np.arange(npt,dtype=np.float32)-npt/2

    def calc_xcov(self,indt1,indt2,npt=None,n_bin1=None,n_bin2=None,normed=False):
        """
        Calculate the cross-covariance between arrays indt1 and indt2 for each bin.
        """
        n_bin1=self._parse_nbin(n_bin1)
        n_bin2=self._parse_nbin(n_bin2)
        shp=self._outshape(indt1.shape,n_bin=n_bin1)
        shp[-2]=min(shp[-2],self._outshape(indt2.shape,n_bin=n_bin2)[-2])
        out=np.empty(shp[:-1]+[npt],dtype=indt1.dtype)
        tmp=int(n_bin2)-int(n_bin1)+npt
        dt1=self.reshape(indt1,n_pad=tmp-1,n_bin=n_bin1)
        dt1=dt1-dt1[...,:,tmp/2:-tmp/2].mean(-1)[...,None] # Note here I am demeaning only on the 'valid' range.
        dt2=self.demean(indt2,n_bin=n_bin2) # Don't need to pad the second variable.
        dt2=dt2-dt2.mean(-1)[...,None]
        for slc in slice1d_along_axis(shp,-1):
            out[slc]=np.correlate(dt1[slc],dt2[slc],'valid')
        if normed:
            out/=(self.std(indt1,n_bin=n_bin1)[...,:shp[-2]]*self.std(indt2,n_bin=n_bin2)[...,:shp[-2]]*n_bin2)[...,None]
        return out

    def set_bindata(self,rawdat,outdat,names=None):
        """
        
        Parameters
        ----------
         *rawdat*: The raw data structure to be binned (if None, a basic time_bindat class is created).
         *outdat*: The bin'd (output) data object to which averaged data is added.
         *names* : The names of variables to be averaged.  If *names* is None, all data in *rawdat* will be binned.
        
        """
        n=len(rawdat)
        for nm,dat,grp in rawdat.iter_wg():
            if ((names is None) or (nm in names)) and (np.ndarray in dat.__class__.__mro__) and (dat.shape[-1]==n):
                outdat.add_data(nm,self.reshape(dat).mean(-1),grp)

    def __init__(self,n_bin,n_fft=None,n_fft_coh=None):
        """
        Initialize an averaging object.

        Parameters
        ----------
        *n_bin*      : the number of data points to include in a 'bin' (average).
        *n_fft*      : the number of data points to use for fft (*n_fft*<=*n_bin*).
                       Default: *n_fft*=*n_bin*
        *n_fft_coh*  : the number of data points to use for coherence and cross-spectra ffts
                       (*n_fft_coh*<=*n_bin*). Default: *n_fft_coh*=*n_bin*/6
        """
        self.n_bin=n_bin
        self.n_fft=n_fft
        self.n_fft_coh=n_fft_coh
        if n_fft is None:
            self.n_fft=n_bin
        elif n_fft>n_bin:
            self.n_fft=n_bin
            print "n_fft larger than n_bin doesn't make sense, setting n_fft=n_bin"
        if n_fft_coh is None:
            self.n_fft_coh=self.n_bin/6
        elif n_fft_coh>=n_bin:
            self.n_fft_coh=n_bin/6
            print "n_fft_coh >= n_bin doesn't make sense, setting n_fft_coh=n_bin/6"
        
    def __call__(self,rawdat,out_type=time_bindat):
        outdat=out_type()
        outdat.props['n_bin']=self.n_bin
        outdat.props['n_fft']=self.n_fft
        outdat.props['n_fft_coh']=self.n_fft_coh
        outdat.props.update(rawdat.props)
        return outdat

    def cohere(self,dat1,dat2,window='hann',debias=True,noise=(0,0),n_fft=None,n_bin1=None,n_bin2=None,):
        """
        Calculate coherence between *dat1* and *dat2*.
        """
        if n_fft is None:
            n_fft=self.n_fft_coh
        n_bin1=self._parse_nbin(n_bin1)
        n_bin2=self._parse_nbin(n_bin2)
        oshp=self._outshape_fft(dat1.shape,n_fft=n_fft,n_bin=n_bin1)
        oshp[-2]=np.min([oshp[-2],dat2.shape[-1]/n_bin2])
        out=np.empty(oshp,dtype=dat1.dtype)
        # The data is detrended in psd, so we don't need to do it here.
        dat1=self.reshape(dat1,n_pad=n_fft,n_bin=n_bin1)
        dat2=self.reshape(dat2,n_pad=n_fft,n_bin=n_bin2)
        for slc in slice1d_along_axis(out.shape,-1):
            out[slc]=cohere(dat1[slc],dat2[slc],n_fft,debias=debias,noise=noise)
        return out

    def cpsd(self,dat1,dat2,fs,window='hann',n_fft=None,n_bin1=None,n_bin2=None,):
        if n_fft is None:
            n_fft=self.n_fft_coh
        n_bin1=self._parse_nbin(n_bin1)
        n_bin2=self._parse_nbin(n_bin2)
        oshp=self._outshape_fft(dat1.shape,n_fft=n_fft,n_bin=n_bin1)
        oshp[-2]=np.min([oshp[-2],dat2.shape[-1]/n_bin2])
        out=np.empty(oshp,dtype=dat1.dtype)
        dat1=self.reshape(dat1,n_pad=n_fft) # The data is detrended in psd, so we don't need to do it here.
        dat2=self.reshape(dat2,n_pad=n_fft)
        for slc in slice1d_along_axis(out.shape,-1):
            out[slc]=cpsd_quasisync(dat1[slc],dat2[slc],n_fft,2*np.pi*fs) # PSD's are computed in radian units
        return out
        
        
    def psd(self,dat,fs,window='hann',noise=0,n_bin=None,n_fft=None,step=None):
        """
        Calculate 'power spectral density' of *dat*.

        Parameters
        ----------
        *dat*    : The raw-data array of which to calculate the psd.
        *window* : The window function to use (default: hanning).
        *noise*  : The white-noise level of the measurement (in the same units as *dat*).
        
        """
        n_bin=self._parse_nbin(n_bin)
        n_fft=self._parse_nfft(n_fft)
        out=np.empty(self._outshape_fft(dat.shape,n_fft=n_fft,n_bin=n_bin))
        dat=self.reshape(dat,n_pad=n_fft) # The data is detrended in psd, so we don't need to do it here.
        for slc in slice1d_along_axis(dat.shape,-1):
            out[slc]=psd(dat[slc],n_fft,2*np.pi*fs,window=window,step=step) # PSD's are computed in radian units
        if ma.valid and ma.marray in dat.__class__.__mro__:
            out=ma.marray(out,ma.varMeta('S(%s)' % dat.meta.name,ma.unitsDict({'s':1})*dat.meta._units**2,dim_names=dat.meta.dim_names[:-1]+['freq'])) # The dat.meta.dim_names[:-1] drops the 'time2' dim_name.
        if noise!=0:
            out-=noise**2/(np.pi*fs)# the two in 2*np.pi cancels with the two in 'self.fs/2'
            out[out<0]=np.min(np.abs(out))/100 # Make sure all values of the PSD are >0 (but still small).
        return out
