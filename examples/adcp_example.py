# Start by importing DOLfYN:
import dolfyn as dlfn
import dolfyn.adp.api as apm
import matplotlib.pyplot as plt

# Then read a file containing adv data:
dat = dlfn.read_example('BenchFile01.ad2cp')

# Since this is a Nortek instrument the ADCP's deployment height in the water
# column isn't taken into account
dat = apm.clean.set_deploy_altitude(dat, h_deploy=0.5)

# Filter beam data with correlation < 50%
dat_cln = apm.clean.correlation_filter(dat, thresh=50)

# Rotate data from the instrument to true ENU (vs magnetic) frame:
# First set the magnetic declination
dat_cln = dlfn.set_declination(dat_cln, 10) # 10 degrees East
dat_earth = dlfn.rotate2(dat_cln, 'earth')

# At any point you can save the data:
dlfn.save(dat_earth, 'adcp_data.nc')

# And reload the data:
dat_copy = dlfn.load('adcp_data.nc')

plt.figure()
plt.pcolormesh(dat_earch.time, dat_earch.range, dat_earth.Veldata.U_mag)
plt.colorbar()
plt.ylabel('Range [m]')
plt.xlabel('Time')