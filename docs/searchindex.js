Search.setIndex({envversion:46,filenames:["about","api/dolfyn","api/dolfyn.adp","api/dolfyn.adv","api/dolfyn.buoy","api/dolfyn.data","api/dolfyn.io","api/dolfyn.tools","glossary","index","install","plotting-tools","usage","usage-specific"],objects:{"":{dolfyn:[1,6,0,"-"]},"dolfyn.OrderedSet":{OrderedSet:[1,8,1,""]},"dolfyn.OrderedSet.OrderedSet":{add:[1,9,1,""],discard:[1,9,1,""],pop:[1,9,1,""]},"dolfyn.adp":{api:[2,6,0,"-"],base:[2,6,0,"-"],clean:[2,6,0,"-"],rotate:[2,6,0,"-"]},"dolfyn.adp.api":{load:[2,7,1,""],mmload:[2,7,1,""],read_rdi:[2,7,1,""]},"dolfyn.adp.base":{adcp_binned:[2,8,1,""],adcp_config:[2,8,1,""],adcp_header:[2,8,1,""],adcp_raw:[2,8,1,""],binner:[2,8,1,""],diffz_first:[2,7,1,""]},"dolfyn.adp.base.adcp_binned":{inds:[2,10,1,""]},"dolfyn.adp.base.adcp_header":{dat_offsets:[2,10,1,""],header_id:[2,10,1,""]},"dolfyn.adp.base.adcp_raw":{S2:[2,10,1,""],diff_style:[2,10,1,""],dudz:[2,10,1,""],dvdz:[2,10,1,""],dwdz:[2,10,1,""],inds:[2,10,1,""],iter_n:[2,9,1,""],time:[2,10,1,""],zd:[2,10,1,""]},"dolfyn.adp.base.binner":{"__call__":[2,9,1,""],calc_stresses:[2,9,1,""],calc_ustar_fitstress:[2,9,1,""]},"dolfyn.adp.clean":{fillgaps_depth:[2,7,1,""],fillgaps_time:[2,7,1,""],find_surface:[2,7,1,""],medfilt_orientation:[2,7,1,""],nan_above_surface:[2,7,1,""],vel_exceeds_thresh:[2,7,1,""]},"dolfyn.adp.rotate":{beam2inst:[2,7,1,""],calc_beam_rotmatrix:[2,7,1,""],inst2earth:[2,7,1,""],inst2earth_heading:[2,7,1,""]},"dolfyn.adv":{api:[3,6,0,"-"],base:[3,6,0,"-"],clean:[3,6,0,"-"],motion:[3,6,0,"-"],rotate:[3,6,0,"-"],turbulence:[3,6,0,"-"]},"dolfyn.adv.base":{ADVbinned:[3,8,1,""],ADVconfig:[3,8,1,""],ADVraw:[3,8,1,""],load:[3,7,1,""],mmload:[3,7,1,""]},"dolfyn.adv.base.ADVraw":{body2imu_vec:[3,10,1,""],has_imu:[3,9,1,""],make_model:[3,10,1,""]},"dolfyn.adv.clean":{GN2002:[3,7,1,""],cleanFill:[3,7,1,""],fillpoly:[3,7,1,""],rangeLimit:[3,7,1,""]},"dolfyn.adv.motion":{CalcMotion:[3,8,1,""],CorrectMotion:[3,8,1,""],correct_motion:[3,7,1,""]},"dolfyn.adv.motion.CalcMotion":{"__call__":[3,9,1,""],calc_velacc:[3,9,1,""],calc_velrot:[3,9,1,""]},"dolfyn.adv.motion.CorrectMotion":{"__call__":[3,9,1,""]},"dolfyn.adv.rotate":{earth2principal:[3,7,1,""],inst2earth:[3,7,1,""],orient2euler:[3,7,1,""]},"dolfyn.adv.turbulence":{TurbBinner:[3,8,1,""],calc_turbulence:[3,7,1,""]},"dolfyn.adv.turbulence.TurbBinner":{"__call__":[3,9,1,""],calc_Lint:[3,9,1,""],calc_epsilon_LT83:[3,9,1,""],calc_epsilon_SF:[3,9,1,""],calc_epsilon_TE01:[3,9,1,""],up_angle:[3,9,1,""]},"dolfyn.buoy":{base:[4,6,0,"-"],read:[4,6,0,"-"]},"dolfyn.buoy.base":{buoy_raw:[4,8,1,""],load:[4,7,1,""],mmload:[4,7,1,""]},"dolfyn.buoy.base.buoy_raw":{U:[4,10,1,""],u:[4,10,1,""],v:[4,10,1,""]},"dolfyn.buoy.read":{readtxt:[4,7,1,""]},"dolfyn.data":{base:[5,6,0,"-"],binned:[5,6,0,"-"],main:[5,6,0,"-"],spec:[5,6,0,"-"],time:[5,6,0,"-"],velocity:[5,6,0,"-"]},"dolfyn.data.base":{DataError:[5,11,1,""],Dbase:[5,8,1,""],Dgroups:[5,8,1,""],Dprops:[5,8,1,""],TimeBased:[5,8,1,""],cat:[5,7,1,""],config:[5,8,1,""],groups:[5,8,1,""],props:[5,8,1,""]},"dolfyn.data.base.Dgroups":{add_data:[5,9,1,""],append:[5,9,1,""],copy:[5,9,1,""],data_names:[5,10,1,""],del_data:[5,9,1,""],groups:[5,10,1,""],init_data:[5,9,1,""],items:[5,9,1,""],iter:[5,9,1,""],iter_wg:[5,9,1,""],pop_data:[5,9,1,""],shapes:[5,10,1,""],subset:[5,9,1,""]},"dolfyn.data.base.Dprops":{props:[5,10,1,""]},"dolfyn.data.base.TimeBased":{toff:[5,10,1,""]},"dolfyn.data.base.config":{copy:[5,9,1,""]},"dolfyn.data.base.groups":{add:[5,9,1,""],copy:[5,9,1,""],data_names:[5,10,1,""],get_group:[5,9,1,""],iter:[5,9,1,""],remove:[5,9,1,""]},"dolfyn.data.base.props":{copy:[5,9,1,""]},"dolfyn.data.binned":{TimeBindat:[5,8,1,""],TimeBinner:[5,8,1,""]},"dolfyn.data.binned.TimeBindat":{freq:[5,10,1,""]},"dolfyn.data.binned.TimeBinner":{"__call__":[5,9,1,""],"var":[5,9,1,""],calc_acov:[5,9,1,""],calc_lag:[5,9,1,""],calc_omega:[5,9,1,""],calc_xcov:[5,9,1,""],check_indata:[5,9,1,""],cohere:[5,9,1,""],cpsd:[5,9,1,""],demean:[5,9,1,""],detrend:[5,9,1,""],do_avg:[5,9,1,""],do_var:[5,9,1,""],mean:[5,9,1,""],phase_angle:[5,9,1,""],psd:[5,9,1,""],reshape:[5,9,1,""],std:[5,9,1,""]},"dolfyn.data.main":{basic:[5,8,1,""],load:[5,7,1,""]},"dolfyn.data.main.basic":{shape:[5,10,1,""]},"dolfyn.data.spec":{cohereobj:[5,8,1,""],denoise_specobj:[5,7,1,""],ind_specobj:[5,7,1,""],mean_specobj:[5,7,1,""],specobj:[5,8,1,""],specobj_hz2rad:[5,7,1,""],specobj_rad2hz:[5,7,1,""]},"dolfyn.data.spec.specobj":{iter4axgroup:[5,9,1,""],iter_wd:[5,10,1,""],mean:[5,9,1,""],shape:[5,10,1,""],specvars:[5,10,1,""],trapz:[5,9,1,""]},"dolfyn.data.time":{date2num:[5,7,1,""],mpltime2matlab_datenum:[5,7,1,""],num2date:[5,7,1,""],time_array:[5,8,1,""]},"dolfyn.data.time.time_array":{datetime:[5,10,1,""],day:[5,10,1,""],hour:[5,10,1,""],matlab_datenum:[5,10,1,""],minmax:[5,9,1,""],minute:[5,10,1,""],month:[5,10,1,""],second:[5,10,1,""],year:[5,10,1,""]},"dolfyn.data.velocity":{VelBindatSpec:[5,8,1,""],VelBindatTke:[5,8,1,""],VelBinnerSpec:[5,8,1,""],VelBinnerTke:[5,8,1,""],Velocity:[5,8,1,""]},"dolfyn.data.velocity.VelBindatSpec":{Suu:[5,10,1,""],Suu_hz:[5,10,1,""],Svv:[5,10,1,""],Svv_hz:[5,10,1,""],Sww:[5,10,1,""],Sww_hz:[5,10,1,""],freq:[5,10,1,""],k:[5,10,1,""]},"dolfyn.data.velocity.VelBindatTke":{Ecoh:[5,10,1,""],I:[5,9,1,""],Itke:[5,9,1,""],tke:[5,10,1,""],upup_:[5,10,1,""],upvp_:[5,10,1,""],upwp_:[5,10,1,""],vpvp_:[5,10,1,""],vpwp_:[5,10,1,""],wpwp_:[5,10,1,""]},"dolfyn.data.velocity.VelBinnerSpec":{calc_vel_cpsd:[5,9,1,""],calc_vel_psd:[5,9,1,""],cspec_pairs:[5,10,1,""]},"dolfyn.data.velocity.VelBinnerTke":{calc_stress:[5,9,1,""],calc_tke:[5,9,1,""]},"dolfyn.data.velocity.Velocity":{U:[5,10,1,""],U_angle:[5,10,1,""],U_earth:[5,10,1,""],U_mag:[5,10,1,""],U_pax:[5,10,1,""],U_rot:[5,9,1,""],calc_principal_angle:[5,9,1,""],noise:[5,10,1,""],principal_angle:[5,10,1,""],rotate_var:[5,9,1,""],shape:[5,10,1,""],u:[5,10,1,""],u_earth:[5,10,1,""],u_pax:[5,10,1,""],v:[5,10,1,""],v_earth:[5,10,1,""],v_pax:[5,10,1,""],w:[5,10,1,""]},"dolfyn.io":{base:[6,6,0,"-"],hdf5:[6,6,0,"-"],main:[6,6,0,"-"],mat:[6,6,0,"-"],nortek:[6,6,0,"-"],nortek_defs:[6,6,0,"-"]},"dolfyn.io.base":{DataFactory:[6,8,1,""],VarAtts:[6,8,1,""]},"dolfyn.io.base.DataFactory":{closefile:[6,10,1,""],filename:[6,10,1,""]},"dolfyn.io.base.VarAtts":{sci_func:[6,9,1,""],shape:[6,9,1,""]},"dolfyn.io.hdf5":{Loader:[6,8,1,""],Saver:[6,8,1,""],pkl_loads:[6,7,1,""]},"dolfyn.io.hdf5.Loader":{get_group:[6,9,1,""],get_name:[6,9,1,""],init_object:[6,9,1,""],iter:[6,9,1,""],iter_attrs:[6,9,1,""],iter_data:[6,9,1,""],iter_groups:[6,9,1,""],load:[6,9,1,""],mmload:[6,9,1,""],read_attrs:[6,9,1,""],read_dict:[6,9,1,""],read_props:[6,9,1,""],read_type:[6,9,1,""]},"dolfyn.io.hdf5.Saver":{complevel:[6,10,1,""],complib:[6,10,1,""],fletcher32:[6,10,1,""],get_group:[6,9,1,""],shuffle:[6,10,1,""],split_groups_into_files:[6,10,1,""],ver:[6,10,1,""],write:[6,9,1,""],write_dict:[6,9,1,""],write_type:[6,9,1,""]},"dolfyn.io.main":{Saveable:[6,8,1,""],get_typemap:[6,7,1,""],load:[6,7,1,""],mmload:[6,7,1,""],probeFile:[6,7,1,""]},"dolfyn.io.main.Saveable":{load:[6,9,1,""],save:[6,9,1,""],save_mat:[6,9,1,""]},"dolfyn.io.mat":{Saver:[6,8,1,""]},"dolfyn.io.mat.Saver":{close:[6,9,1,""],ver:[6,10,1,""],write:[6,9,1,""]},"dolfyn.io.nortek":{NortekReader:[6,8,1,""],int2binarray:[6,7,1,""],read_nortek:[6,7,1,""],recatenate:[6,7,1,""]},"dolfyn.io.nortek.NortekReader":{checksum:[6,9,1,""],code_spacing:[6,9,1,""],dat2sci:[6,9,1,""],filesize:[6,10,1,""],findnext:[6,9,1,""],findnextid:[6,9,1,""],fun_map:[6,10,1,""],init_ADV:[6,9,1,""],init_AWAC:[6,9,1,""],pos:[6,10,1,""],rd_time:[6,9,1,""],read:[6,9,1,""],read_awac_profile:[6,9,1,""],read_head_cfg:[6,9,1,""],read_hw_cfg:[6,9,1,""],read_id:[6,9,1,""],read_microstrain:[6,9,1,""],read_user_cfg:[6,9,1,""],read_vec_checkdata:[6,9,1,""],read_vec_data:[6,9,1,""],read_vec_hdr:[6,9,1,""],read_vec_sysdata:[6,9,1,""],readfile:[6,9,1,""],readnext:[6,9,1,""],sci_awac_profile:[6,9,1,""],sci_microstrain:[6,9,1,""],sci_vec_data:[6,9,1,""],sci_vec_sysdata:[6,9,1,""]},"dolfyn.tools":{misc:[7,6,0,"-"],psd:[7,6,0,"-"],within:[7,7,1,""]},"dolfyn.tools.misc":{degN2cartDeg:[7,7,1,""],delta:[7,8,1,""],detrend:[7,7,1,""],fillgaps:[7,7,1,""],find:[7,7,1,""],group:[7,7,1,""],interpgaps:[7,7,1,""],medfiltnan:[7,7,1,""],slice1d_along_axis:[7,7,1,""]},"dolfyn.tools.misc.delta":{"__call__":[7,9,1,""],abs:[7,9,1,""],shape:[7,10,1,""]},"dolfyn.tools.psd":{cohere:[7,7,1,""],cpsd:[7,7,1,""],cpsd_quasisync:[7,7,1,""],phase_angle:[7,7,1,""],psd:[7,7,1,""],psd_freq:[7,7,1,""]},dolfyn:{OrderedSet:[1,6,0,"-"],adp:[2,6,0,"-"],adv:[3,6,0,"-"],buoy:[4,6,0,"-"],data:[5,6,0,"-"],io:[6,6,0,"-"],tools:[7,6,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"10":["np","attribute","Python attribute"],"11":["np","exception","Python exception"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["np","module","Python module"],"7":["np","function","Python function"],"8":["np","class","Python class"],"9":["np","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","10":"np:attribute","11":"np:exception","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception","6":"np:module","7":"np:function","8":"np:class","9":"np:method"},terms:{"033hz":13,"03hz":13,"0x00":6,"0x04":6,"0x05":6,"0x07":6,"0x10":6,"0x11":6,"0x12":6,"0x20":6,"0x71":6,"0xa5":6,"1hz":13,"30mb":5,"30second":13,"3dm":3,"6byte":6,"__call__":[2,3,5,7],"_abcol":1,"_data_typ":5,"_object_typ":6,"_var":5,"abstract":[5,6,9],"boolean":[3,7],"break":3,"byte":[3,6],"case":[],"class":[1,2,3,4,5,6,7],"default":[2,3,5,6,7,13],"float":[3,5,7],"function":[2,3,5,6,7,10,13],"import":[3,12,13],"int":[3,5,6,7],"long":[3,13],"new":[6,10],"public":0,"return":[3,5,6,7,12],"true":[1,2,3,5,6,7,13],"var":[2,5],abil:3,abov:2,accel:3,accel_filtfreq:[3,13],acceler:3,acceleromet:13,accelst:3,access:[3,6],accord:[3,6,7],accur:3,accuraci:[3,13],ach:5,acoust:[3,9,12],actual:[5,7],adcp:[2,9],adcp_bin:2,adcp_config:2,adcp_head:2,adcp_raw:2,adcpo:2,add:[1,3,5,6,11],add_closemethod:6,add_data:5,address:6,adjust:6,adp:[],adp_raw:2,adpo:2,adv:[],adv_bin:3,adv_config:3,adv_data:6,adv_data_rotated2princip:[3,12],adv_raw:3,advantag:5,advb:3,advbin:3,advconfig:3,advo:3,advr:3,advraw:[3,6,12],after:[3,9,13],all:[2,3,5,6,13],allow:[6,9,13],along:[5,7,9],alreadi:3,also:[2,3,5,6,7,9,12,13],amount:2,amplifi:3,analysi:9,analyz:12,ang:7,angl:[2,3,5,7],angn:7,angrt:3,ani:[3,7,12],apd:2,api:[],appar:5,append:[5,6],appendmat:6,appli:[2,7],applic:13,apply_over_ax:7,apply_over_axi:7,approach:[3,6,13],april:3,arg:5,argonaut:12,argument:6,arm:13,around:13,arr:[5,7],arr_shap:7,arrai:[3,5,6,7,12,13],array_lik:7,arrow:13,articl:13,assembl:13,assign:2,assum:[3,5,12],assumpt:3,attempt:6,attribut:[3,5,6,13],auto:[3,5,6,7],automat:6,avail:[3,12],averag:[2,3,5,6,7,12],avg_data_object:5,avm:3,avmot:3,awac:6,awai:5,axi:[2,5,7],back:3,bad:[2,3,5],band:13,base:[],basic:[3,5,6,12],beam1vel:2,beam2inst:2,beam2vel:2,beam3vel:2,beam4vel:2,beam:[2,3],beamang:2,beamvel:2,becaus:[3,10,13],becom:3,been:[3,9,13],begin:[5,7],behavior:7,benignus1969:7,best:5,between:[3,5,6,7],beyond:13,bia:[3,13],big:6,bin:[],binari:[6,9,12],binner:[2,3,5,12],black:13,block:6,bodi:[3,13],body2head_rotmat:[3,13],body2head_vec:[3,13],body2imu_vec:3,bool:[2,3,5,6,7],both:7,bottom:[3,5],boxcar:7,buffer:6,bufsiz:6,buoi:[],buoy_raw:4,burau:2,byt:6,cabl:13,calc:7,calc_acov:[3,5],calc_beam_rotmatrix:2,calc_epsilon_lt83:3,calc_epsilon_sf:3,calc_epsilon_te01:3,calc_lag:5,calc_lint:3,calc_omega:5,calc_principal_angl:5,calc_stress:[2,5],calc_tk:5,calc_turbul:3,calc_ustar_fitstress:2,calc_vel_cpsd:5,calc_vel_psd:5,calc_velacc:3,calc_velrot:3,calc_xcov:5,calcmot:3,calcul:[2,3,5,7],call:[3,13],can:[3,5,6,7,9,10,12,13],cannot:13,cap:[3,13],cartesian:7,cast:6,cat:5,caus:5,center:[3,7,12],chain:9,challeng:3,check:[2,3,6],check_indata:5,checkbox:13,checksum:6,chelton:7,chosen:6,chunk:[2,3],citat:3,clean:[],cleanfil:3,clockwis:[7,13],clone:10,close:6,closefil:6,code:6,code_spac:6,coh:5,coher:[5,7],cohereobj:5,com:10,come:[5,10],command:13,common:12,commun:3,complevel:6,complex:[3,5,7,13],complib:6,complimentari:[5,7],compon:[3,5],comput:[3,5,7],concav:2,config:[2,3,5],config_typ:[2,3,5],configur:[2,13],conj:7,conjug:7,connect:[3,13],consid:[2,7],consist:7,construct:13,constructor:5,consult:10,contact:9,contain:[2,3,5,6,12,13],contamin:[3,13],continu:7,continuo:7,convect:3,convert:[6,7],convex:2,coord:3,coord_si:3,coordin:[2,3,6,13],copi:[5,7],copyright:0,corner:5,corr_vel:3,correct:[],correct_mot:[3,13],corrected_data:3,correctli:13,correctmot:3,correl:7,correspond:6,could:13,counter:7,covari:[3,5,7],cpsd:[5,7],cpsd_quasisync:7,creat:[3,5,6,10,12],credit:7,critic:5,cross:[5,7],cspec:5,cspec_pair:5,current:[5,6,7,10,12],cyan:13,d_range_filt:2,dai:5,dang:13,dat1:5,dat2:5,dat2sci:6,dat:[2,3,5,12,13],dat_bin:[3,12],dat_bin_copi:[3,12],dat_offset:2,data:[],data_boject:6,data_factori:6,data_group:[2,3,4,5,6],data_nam:5,data_name_in_group:5,data_object:5,dataerror:5,datafactori:6,dataset:[3,5],date2num:5,datetim:5,datetime64:5,dbase:5,dct:6,deal:5,debia:[3,5,7],debug:6,decim:5,declin:13,deepcopi:5,default_v:6,defin:[3,6,7,12,13],definit:7,defualt:[3,7],deg:3,degn2cartdeg:7,degre:[2,3,7,13],del_data:5,delta:7,demean:5,denoise_specobj:5,densiti:[5,7],depend:[],deploy:[],depth:2,descript:3,design:[9,13],despik:3,detail:[6,12],detect:[2,6],determin:6,detrend:[5,7],develop:9,deviat:[3,5],dflt_ax:5,dfrac:2,dgroup:[5,6],dict:[2,3,5,6],dictionari:[3,6],diff_styl:2,differ:[2,3,5,7,10],diffz_first:2,dim:[6,7],dim_nam:6,dimens:[3,5,6,7],dimension:7,dind:2,direct:[3,13],directli:7,directori:[10,13],discard:1,disk:[6,9],dissip:3,distanc:7,distort:13,divid:7,do_avg:5,do_c:6,do_checksum:6,do_compress:6,do_var:5,document:[6,12,13],doe:[3,5,6,7],doesn:3,dolfyn:0,doppler:[3,9,12],down:5,download:[],download_loc:10,dprop:[5,6],drift:[3,13],dtype:[3,5,6,7,12],dudz:2,due:3,dvdz:2,dvel:13,dwdz:2,each:[3,5,6,12],earth2princip:[3,12],earth:[2,3,12],easi:9,east:[7,13],echo:2,ecoh:5,effect:[2,13],either:[3,10],element:[5,7],elgar:3,empti:[5,6,7],enabl:[9,13],end:[3,5,6,7,13],endian:6,energi:[3,5],ensembl:[5,7],entir:6,entri:[7,13],enu:13,epsilon:3,equat:3,equip:3,equival:7,err_vel:2,error:3,essenti:[3,5,6,7],estim:[3,13],euler:3,even:7,everi:5,exampl:[],exce:2,exceed:2,except:5,execut:10,exist:[2,6],expens:3,explicitli:[6,7,13],extens:13,extrapflg:7,extrapol:7,fact:13,factor:6,factori:6,fale:6,fall:[3,7],fals:[2,3,5,6,7],fast_psd:7,faster:7,fft:[3,7],field:3,figur:13,file:[0,3,5,6,9,12,13],filenam:6,files:6,fill:[2,7],fillgap:7,fillgaps_depth:2,fillgaps_tim:2,fillpoli:3,filter:[2,3,7,13],find:[2,5,6,7],find_surfac:2,findnext:6,findnextid:6,first:[2,5,6,7],fit:[3,5],fix:[2,3,5,13],fixed_orient:2,flag:[2,3,5,13],fletcher32:6,float32:[6,12],float64:5,flow:[2,3],fluctuat:3,fname:[2,3,4,5,6],folder:10,follow:3,forc:[2,3],format:[3,5,6,9,13],formula:3,forthcom:13,forward:2,found:[6,7,13],fraction:[2,5],fractionf:7,frame:[3,12,13],freebsd:0,freq:[3,5,7],freq_rng:3,frequenc:[3,5,7,13],freqvar:5,from:[2,3,5,6,7,9,10,12,13],full:[5,7],fun_map:6,funciton:6,funni:7,further:6,futur:5,gap:[2,3,7],gener:[6,12],geomag:13,get:[5,10],get_group:[5,6],get_nam:6,get_typemap:6,git:10,github:10,given:7,glider:3,gn2002:[3,12],good:2,gore:[3,12],gov:13,greater:5,group:[3,5,6,7],group_nam:5,gx3:3,gzip:6,h5py:[6,9,10],half:[5,7],han:[5,7],handl:3,hann:[3,5,7],happi:13,hardwar:6,has_imu:3,have:[3,5,6,7,9,10],hdf5:[],head:[2,3,13],header_id:2,heirarchi:6,here:[6,7,11],high:[3,6,13],hit:2,hold:[3,6],horizont:[3,5],hour:5,how:[6,10],howev:3,http:[10,13],ident:13,imag:13,implement:[3,5,7],implicitli:3,imu:[],in_plac:7,includ:[5,9,10,12],increas:2,ind:[2,5],ind_specobj:5,indat:[2,3,5],independ:5,index:[5,7,9],indic:[],indiscern:13,indt1:5,indt2:5,induc:3,inerti:[3,13],inf:[2,7],info:6,inform:[6,10,12,13],inher:13,init_adv:6,init_awac:6,init_data:5,init_object:6,initi:[5,6],input:[2,3,5,6,7,9,13],insert:5,insid:7,inst2earth:[2,3,12],inst2earth_head:2,inst:2,instal:[],instanc:[5,6],instead:[5,6],instrument:[2,3,12],int2binarrai:6,integ:[5,7],integr:3,intens:[3,5],interact:12,interest:3,interfac:6,intern:6,interpgap:7,interpol:[3,7],invers:[2,3],issu:5,item:[3,5],iter4axgroup:5,iter:[1,2,3,5,6,7],iter_attr:6,iter_data:6,iter_group:6,iter_n:2,iter_wd:5,iter_wg:5,iternum:6,itk:[3,5],itke_thresh:3,itself:6,januari:2,jgr:2,journal:13,jpo:3,kalman:3,kei:[1,6,13],kellei:5,kernel:[2,7],kernel_s:2,keyword:[6,7],kilcher:0,kinemat:3,kinet:[3,5],knowledg:3,known:[3,10,13],kwarg:[5,6],l_long:7,l_short:7,lack:3,lag:[3,5],larg:3,larger:13,last:[1,3,5,7],later:6,layer:9,lead:[3,7],least:7,left:5,len:3,length:[2,3,7],level:[3,5,6,7],levi:0,librari:[7,9,12],like:[5,12],linalg:7,line:[5,13],linear:7,linearli:[3,7],lint:3,list:[2,3,5,6,7],littl:6,lkilcher:10,load:[2,3,4,5,6,9,12,13],loader:6,locat:6,logic:[3,5],longer:7,look:6,loop:7,low:[3,13],lower:[3,5],lstsq:7,lt83:3,lumlei:3,made:7,magenta:13,magnet:13,magnitud:[3,5,7],mai:[3,5,7,10],main:[],make:[12,13],make_model:3,manual:[2,10],map:[3,6],mark:13,mask:5,mask_thresh:5,mat:[],match:6,matlab:[6,9,13],matlab_datenum:5,matplotlib:[5,7],matrix:[2,3,5,13],max:5,max_file_s:6,max_file_size_mb:6,maxgap:[2,7],maxim:7,maximum:[2,5,7],mcalc:3,mean:[5,7],mean_specobj:5,measur:12,medfilt:2,medfilt_orient:2,medfiltnan:7,median:[2,7],memori:[3,6],meta:[5,6],meter:[3,13],method:[3,6,7,12,13],microstrain:[3,6],min:5,min_length:7,minim:[7,13],minimum:[5,7],minmax:5,minut:5,misc:[],mlab:7,mmload:[2,3,4,6],mod:5,mode:6,modifi:6,monosmith:2,month:5,moor:[3,13],more:[3,6,7,12,13],most:12,mot:3,motcorrect_vector:13,motion:[],mount:[3,13],move:[3,5,13],mpl:7,mpltime2matlab_datenum:5,mpltime:[5,12],much:7,multi:7,multipl:[6,7,13],must:[2,3,5,13],mutableset:1,my_1d_funct:7,my_data_fil:3,my_vector:13,my_vector_fil:12,n_bin1:5,n_bin2:5,n_bin:[2,3,5,12],n_f:3,n_fft:[2,3,5,12],n_fft_coh:[2,3,5],n_pad:5,n_time:3,name:[2,3,5,6],namespac:6,nan:[2,3,5,7],nan_above_surfac:2,nan_joint:5,nanmedianfilt:2,nation:12,nbin:2,nbyte:6,ndarrai:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],ndbc:12,nearest:5,necessari:13,need:[5,7,10,11],nen:2,next:[5,6],nfft:7,nfilt:2,ngdc:13,niel:5,nikora2002:3,nikora:[3,12],nline:6,no_essenti:6,noaa:13,node:6,nois:[3,5,7],non:[3,5,6],none:[1,2,3,4,5,6,7],norm:5,nortek:[],nortek_def:[],nortekread:6,north:[7,13],nosplit:6,nosplit_fil:6,notch:13,note:[],notori:3,now:[3,5,13],nping:6,npt:[3,5],num2dat:5,number:[3,5,6,7,13],numer:[2,6],numpi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],numpy_arrai:7,obj:[5,6],object:[2,3,5,6,7,12,13],object_typ:6,objet:3,obtain:13,occur:3,oceanograph:12,oceanographi:9,odd:2,off:5,offset:6,often:3,omega:[3,5],omega_rang:3,omega_range_epsilon:3,onc:[5,10,13],one_sid:5,oned_a:6,onli:[5,6,7,13],onlin:5,onward:10,open:6,oper:[3,7,12],oppos:[5,13],opposit:3,option:[3,5,6,7],order:[5,13],ordin:5,organ:[5,12],orient2eul:3,orient:[2,3,6,13],orientmat:3,origin:3,other:[3,5,6,9],otherwis:6,out:[2,5,6,7,10],out_typ:[2,3,5],outdat:5,output:[5,7,9,13],outsid:3,over:[2,3,5,6,7],overlap:7,overrid:5,overwrit:6,pad:5,pair:6,paramet:[2,3,5,6,7,13],part:6,particular:5,pass:[3,13],path:12,perform:[2,3,6,7,12,13],period:13,perspect:13,phase:[5,7],phase_angl:[5,7],pickl:6,ping:6,pip:10,pitch:[2,3],pkl_load:6,place:6,plan:13,platform:13,plot:[],plu:[3,5,6],point:[3,5,6,7,9,10,12],polyfit:3,polynomi:3,pop:[1,2],pop_data:5,posit:[3,7,13],possibl:[3,13],post:3,pow:7,power:[5,7],practic:3,pre:[],preserv:3,pressur:13,previou:5,primari:[3,6,13],princip:[3,5,12],principal_angl:5,prinicip:5,print:6,prior:[2,3,5],probabl:13,probe:[3,6,13],probefil:6,process:12,produc:2,product:7,profil:[2,9,12],progress:6,prompt:12,prop:[2,3,5,6,13],properli:13,properti:5,protocol:3,provid:[3,6],psd:[],psd_freq:7,purchas:13,python:[9,10,13],pythonxi:10,quantiti:13,quarter:5,rad:3,radial:[3,5],radian:2,random:3,rang:[2,3,5,7,13],rangelimit:3,rate:[3,5,7],rather:13,ratio:5,raw:[3,5],raw_data_object:5,rawdat:5,rd_time:6,rdi:[2,9],read:[],read_attr:6,read_awac_profil:6,read_dict:6,read_head_cfg:6,read_hw_cfg:6,read_id:6,read_microstrain:6,read_nortek:[3,6,12,13],read_prop:6,read_rdi:2,read_typ:6,read_user_cfg:6,read_vec_checkdata:6,read_vec_data:6,read_vec_hdr:6,read_vec_sysdata:6,reader:6,readfil:6,readnext:6,readtxt:4,real:[3,7],reason:3,recaten:6,recommend:[10,13],record:[2,13],recov:3,refeferenc:13,refer:[2,3],region:7,reimplemnt:5,rel:13,releas:0,reload:[3,12],remov:[3,5,7,13],renois:5,repeat:6,repeatedli:7,replac:7,repositori:[0,10,13],repres:3,requir:10,reshap:5,respect:[5,7,13],result:6,retval:6,rev:3,revers:[2,3],reynold:[2,3,5],right:5,rigidli:[3,13],roll:[2,3],root:6,rotat:[],rotate_u:5,rotate_var:[3,5],rotmat:13,round:5,round_to:5,routin:[3,6,7],row:6,run:7,same:[5,7],sampl:[3,5,7],save:[3,5,6,9,12,13],save_mat:6,saveabl:[5,6],saver:6,scale:[3,6],sci_awac_profil:6,sci_func:6,sci_microstrain:6,sci_vec_data:6,sci_vec_sysdata:6,scientif:6,scipi:[2,6,10],scope:13,screen:2,script:[10,13],search:9,searchcod:6,sec:7,second:[3,5,7],section:7,see:[0,2,3,5,6,7,12,13],seem:3,segment:7,self:[5,6],semi:3,sensor:[3,6,13],separ:3,separate_prob:3,seri:7,set:[2,3,7,12,13],setup:10,sever:[5,10,12],shape:[3,5,6,7],ship:3,shorter:7,should:[3,5,6,7,9],shuffl:6,side:[3,5],sidelin:6,sigma_uh:3,sign:3,signal:[2,3,5,7,13],simpl:[6,13],simpli:[5,10,13],simplifi:7,singl:[3,7],size:[5,6,7],skip:[5,7],slc:7,slice1d_along_axi:7,slice:[2,5,7],slightli:13,slowli:3,small:3,softwar:13,some:[3,5],sontek:12,sourc:[1,2,3,4,5,6,7],space:[6,12],spec:[],specif:12,specifi:[2,3,5,6,7,10,13],specobj:5,specobj_hz2rad:5,specobj_rad2hz:5,spectra:[3,5,7],spectral:[5,7],spectrum:[3,5],specvar:5,speed:7,split_groups_into_fil:6,sqrt:5,squar:7,stacei:2,standard:[3,5],start:[3,5,6],stationari:3,statist:3,std:[5,7],stem:13,step:[5,7,13],still:3,store:[3,6],stress:[2,3,5],string:[2,3,5,6,7],strng:6,structur:[3,5,6,13],subclass:6,subset:5,subtract:3,suffix:5,suggest:9,suit:3,sum:[3,5],support:[6,7,12,13],sure:13,surf:3,surfac:2,suu:[3,5],suu_hz:[3,5],svv:[3,5],svv_hz:[3,5],sww:[3,5],sww_hz:[3,5],sync:6,synchron:[3,7],system:[2,3,6,10,13],take:[2,5],taken:[2,3],te01:3,team:9,techniqu:3,teledyn:[2,9],terrai:3,test:3,than:[2,3,5,6,7,13],thei:2,them:[5,6],therefor:[3,7,13],theta:[2,3],thi:[2,3,5,6,7,9,12,13],those:[3,5,6,13],three:[3,5],thresh:[2,5,7],threshold:[2,3],tidal:2,tightli:[3,7],time:[],time_arrai:[5,12],timebas:5,timebindat:5,timebinn:5,timeseri:5,tint:3,tip:3,title_nam:6,tke:5,tke_vec:3,to_earth:3,toff:5,tool:[],top:5,track:3,transduc:13,transform:[2,3],translat:3,trapz:5,trend:[5,7],trowbridg:3,tupl:7,turbbinn:[3,12],turbul:[],turn:6,two:[3,5,7,13],type:[3,5,6,12],type_map:[3,5,6],typeobj:5,u_angl:5,u_corr:3,u_earth:5,u_inst:2,u_mag:[3,5],u_pax:5,u_raw:3,u_rot:5,uh_complex:3,umag:3,umot:3,unbias:7,uncorrect:3,under:0,undersea:3,underutil:7,unit:[3,5,6,7,13],unitsdict:6,unknown:[2,3,5],unless:6,unstratifi:2,up_angl:3,updat:5,upon:3,upper:5,upup_:[3,5],upvp_:[3,5],upwp_:[3,5],usag:10,user:[6,13],usual:[2,3],util:[3,6,13],v_earth:5,v_inst:2,v_pax:5,val:[2,5,6,7],valid:7,valu:[2,3,5,6,7,13],varatt:6,vari:3,variabl:[2,3,5,6,13],varianc:[2,3,5],variou:3,vec:[3,12,13],vec_sysdata:6,vector:[3,5,6,7,12,13],vector_data01:[3,12],vector_data_imu01:13,vector_data_imu02:13,vel:3,vel_exceeds_thresh:2,vel_filtfreq:3,velacc:3,velbindatspec:[3,5],velbindattk:[2,5],velbinnerspec:[3,5],velbinnertk:[2,5],veldat:[3,5],veloc:[],velocimet:[3,9,12],velocitiesfrom:2,velraw:3,velrot:3,ver:6,versa:3,version:10,via:12,vice:3,view:6,view_typ:6,vpvp_:[3,5],vpwp_:[3,5],w_inst:2,wahl2003:3,wai:[3,10,13],want:[7,13],wave:3,wavenumb:[3,5],web:13,websit:13,well:12,were:3,what:6,whatev:7,when:[2,3,6,13],where:[2,3,5,6,7],whether:[2,3,5,6,7],which:[2,3,5,6,7,12,13],white:5,who:[6,13],whole:2,width:[2,7],window:[3,5,7,10,13],within:[6,7],work:10,wpwp_:[3,5],write:[6,13],write_dict:6,write_typ:6,written:[6,9],www:13,xyz:[3,13],year:5,yellow:13,yet:3,yield:[2,5],you:[3,7,9,10,12,13],your:[10,13],zero:[3,5],zone:3},titles:["About","dolfyn package","dolfyn.adp package","dolfyn.adv package","dolfyn.buoy package","dolfyn.data package","dolfyn.io package","dolfyn.tools package","Glossary","Welcome to the DOLfYN home page!","Download and Install","Plotting Tools","Usage","Usage - Specific Cases"],titleterms:{"case":13,about:0,adp:2,adv:[3,12,13],api:[2,3],base:[2,3,4,5,6],bin:5,buoi:4,clean:[2,3],content:[1,2,3,4,5,6,7,9],correct:13,data:[5,12,13],depend:10,deploy:13,dolfyn:[1,2,3,4,5,6,7,9],download:10,exampl:3,glossari:8,hdf5:6,histori:0,home:9,imu:13,indic:9,instal:10,licens:0,main:[5,6],mat:6,measur:13,misc:7,modul:[1,2,3,4,5,6,7],motion:[3,13],nortek:6,nortek_def:6,note:9,orderedset:1,packag:[1,2,3,4,5,6,7],page:9,plot:11,pre:13,process:13,psd:7,read:[4,12],requir:13,rotat:[2,3],spec:5,specif:13,submodul:[1,2,3,4,5,6,7],subpackag:1,tabl:9,time:5,tool:[7,11],turbul:3,usag:[12,13],veloc:5,welcom:9,work:12}})