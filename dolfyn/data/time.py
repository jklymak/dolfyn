from __future__ import division
from datetime import datetime, timedelta


def epoch2date(ds_time, utc=False, offset_hr=0, to_str=False):
    '''
    Convert from epoch time (seconds since 1/1/1970) to datetime object
    
    Parameters
    ----------
    ds_time : xr.DataArray
        Time coordinate data-array or single time element
    
    utc : logical, default=False
        If True, converts to UTC. If False, data remains in instrument's 
        timezone (unknown to dolfyn: is set at instrument deployment, 
        usually sync'd to the user's computer)
    
    offset_hr : int
        Number of hours to offset time by (e.g. UTC -7 hours = PDT)
    
    to_str : logical
        Converts datetime object to a readable string
        
    Returns
    -------
    time : The converted datetime object or list(strings) 
        
    '''
    ds_time = ds_time.values
    
    if utc:
        time = [datetime.utcfromtimestamp(t) for t in ds_time]
    else:
        time = [datetime.fromtimestamp(t) for t in ds_time]
    if offset_hr != 0:
        time = [t + timedelta(hours=offset_hr) for t in time]
    if to_str:
        time = date2str(time)
    
    return time


def date2str(dt, format_str=None):
    '''
    Convert array of datetime objects to actual legible timestamps
    
    '''
    if format_str is None:
        format_str = '%Y-%m-%d %H:%M:%S.%f'

    if not isinstance(dt, list):
        dt = [dt]
        
    return [t.strftime(format_str) for t in dt]


def date2epoch(dt):
    '''
    Convert datetime object to epoch time
    
    '''
    if not isinstance(dt, list):
        dt = [dt]
    
    return [t.timestamp() for t in dt]


def date2matlab(dt):
    '''
    Convert python datetime object to matlab datenum
    
    '''
    time = list()
    for i in range(len(dt)):
        mdn = dt[i] + timedelta(days=366)
        frac_seconds = (dt[i]-datetime(dt[i].year,dt[i].month,dt[i].day,0,0,0)).seconds / (24*60*60)
        frac_microseconds = dt[i].microsecond / (24*60*60*1000000)
        time.append(mdn.toordinal() + frac_seconds + frac_microseconds)
        
    return time
    
    
def matlab2date(matlab_dn):
    '''
    Convert matlab datenum to python datetime object
    
    '''
    time = list()
    for i in range(len(matlab_dn)):
        day = datetime.fromordinal(int(matlab_dn[i]))
        dayfrac = timedelta(days=matlab_dn[i]%1) - timedelta(days=366)
        time.append(day + dayfrac)
        
    return time


def _fullyear(year):
    if year > 100:
        return year
    year += 1900 + 100 * (year < 90)
    return year

