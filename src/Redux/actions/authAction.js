import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ERROR,
  MPIN_SUCCESS,
  MPIN_FAIL,
  FORGOT_PASS_OTP_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGET_MPIN_SUCCESS,
  FORGET_MPIN_FAIL,
  FORGOT_PASS_OTP_SUCCESS,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAIL,
  DEVICEID_OTP,
  DEVICE_CHECK_OTP_SUCCESS,
  VALIDATE_OTP_SUCCESS,
  VALIDATE_OTP_FAIL,
  FORGET_MPIN_OTP_FAIL,
  FORGET_MPIN_OTP_SUCCESS,
  UPDATE_MPIN_FAIL,
  UPDATE_MPIN_SUCCESS,
  LOGIN_LOADNIG,
  CATACH_ERROR,
  DEVICE_CHECK_OTP_FAIL,
  SIGNUP_USER_FAIl,
  SIGNUP_USER_SUCCESS,
  CREATE_OTP_BENEFICIARY_FAIL,
  CREATE_MEMBAR_TOKEN_FAIL,
  CREATE_MEMBAR_TOKEN_SUCCESS,
  SIGNUP__CHECK_OTP_FAIL,
  SIGNUP_CHECK_OTP_SUCCESS,
  GET_BANNERS_SUCCESS,
  ISFIN_BUS_RD_SUCCESS,
  ISFIN_BUS_RD_FAIL,
  GET_PROFILE_SUCCUESS,
  GET_PROFILE_FAIL,
  GET_PREPAID_BILLER_SUCCESS,
  GET_PREPAID_BILLER_FAIL,
  CREATE_OTP_EDITPROFILE_SUCCESS,
  CREATE_OTP_EDITPROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAIL,
  STATEMENT_DATE_SUCCESS,
  STATEMENT_DATE_FAIL,
  SESSION_MISSING,
  GET_EULA_SUCCESS,
  GET_RD_URL,
  FD_CHART_URL_SUCCESS,
} from '../constants/types';
import {setAuthToken} from '../../components/utils/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';
import {getUserData} from '../../components/DataAccess/GetData';
import {SetauthtokenMpin} from '../../components/utils/SetauthTokenMpin';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';

// const API_URL   ='https://sparkinapp.assccl.com:8443/vk-syndicatePrepaid/rest'

//  signup apis

var password = '';
export const signupCheckmobile = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.post(`${API_URL}/CheckMobileNoV2_0 `, data);
      let createUserDetails = await res.data;
      console.log('res', createUserDetails);
      if (createUserDetails.code === '200') {
        dispatch({
          type: SIGNUP_USER_SUCCESS,
          payload: createUserDetails,
        });
      } else {
        dispatch({
          type: SIGNUP_USER_FAIl,
          payload: createUserDetails,
        });
      }
    } catch (err) {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const checkMoblieno = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.post(
        `${API_URL}/checkmobilenootpverificationv2_O`,
        data,
      );
      let otpDetails = await res.data;
      console.log('res', otpDetails);
      if (otpDetails.code === '313') {
        dispatch({
          type: SIGNUP__CHECK_OTP_FAIL,
          payload: otpDetails,
        });
      } else if (otpDetails.Data.code === '200') {
        dispatch({
          type: SIGNUP_CHECK_OTP_SUCCESS,
          payload: otpDetails.Data,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const createMemberToken = (data, callback) => async dispatch => {
  console.log(data);
  return axios
    .post(`${API_URL}/createMemberToken `, data)
    .then(res => {
      console.log('res', res.data);

      let membarTokenDetails = res.data;
      console.log('rea', membarTokenDetails);
      if (membarTokenDetails.code === '309') {
        alert('Entered Password Invalid')
        dispatch({
          type: LOGIN_FAIL,
          payload: membarTokenDetails,
        });
      } else if (membarTokenDetails.code === '304') {
        dispatch({
          type: LOGIN_FAIL,
          payload: membarTokenDetails,
        });
      } else if (membarTokenDetails.Data.Message === 'SUCCESS') {
        AsyncStorage.mergeItem(
          'Loginuser',
          JSON.stringify(membarTokenDetails.Data),
        );

        const token = membarTokenDetails.Data.Token;
        const memberid = membarTokenDetails.Data.memberid;
        password = data.Password;
        setAuthToken(token, memberid, password);

        // getUserData()

        dispatch({
          type: CREATE_MEMBAR_TOKEN_SUCCESS,
          payload: res.data.Data,
        });
      }
    })
    .catch(err => {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
};

// export const createMemberToken = data => {
//   console.log(data);
//   return async dispatch => {
//     try {
//       const res = await axios.post(`${API_URL}/createMemberToken`, data);
//       let membarTokenDetails = await res.data;
//       console.log('res', membarTokenDetails);
//       if (membarTokenDetails.code === '309') {
//         dispatch({
//           type: LOGIN_FAIL,
//           payload: membarTokenDetails,
//         });
//       } else if (membarTokenDetails.Data.code === "200") {

//         let token = membarTokenDetails.Data.Token;
//             password= data.password;
//            let memberid=membarTokenDetails.Data.memberid

//         setAuthToken(token, memberid, password);

//         dispatch({
//           type: CREATE_MEMBAR_TOKEN_SUCCESS,
//           payload: membarTokenDetails.Data,
//         });

//       }
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: CATACH_ERROR,
//         payload: err,
//       });
//     }
//   };
// };

export const ResendOtpCheckMobileNo = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.post(
        `${API_URL}/ResendOtpCheckMobileNoV2_0`,
        data,
      );
      let resendOtp = await res.data;
      console.log('res', resendOtp);
      if (resendOtp.code === '200') {
        dispatch({
          type: SIGNUP_CHECK_OTP_SUCCESS,
          payload: resendOtp,
        });
      } else {
        dispatch({
          type: SIGNUP_CHECK_OTP_FAIL,
          payload: resendOtp,
        });
      }
    } catch (err) {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const isFinbusCustomerForRD = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/isFinbusCustomerForRD?membarId=${data.membarId}`,
      );
      let finebusDetails = await res.data;
      if (finebusDetails) {
        dispatch({
          type: ISFIN_BUS_RD_SUCCESS,
          payload: finebusDetails,
        });
      } else {
        dispatch({
          type: ISFIN_BUS_RD_FAIL,
          payload: finebusDetails,
        });
      }
    } catch (err) {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

//  login apis

export const loginUser = (data, callback) => async dispatch => {
  password = data.password;
  console.log(data);
  return axios
    .post(`${API_URL}/loginByPasswordV2_O `, data)
    .then(res => {
      console.log('res', res.data);

      let loginDetail = res.data;
      console.log('rea', loginDetail);
      if (loginDetail.code === '309') {
        console.log('err');
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      } else if (loginDetail.code === '504') {
        dispatch({
          type: DEVICEID_OTP,
          payload: loginDetail,
        });
      } else if (loginDetail.code === '404') {
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      } else if (loginDetail.Data.Message === 'SUCCESS') {
        AsyncStorage.mergeItem('Loginuser', JSON.stringify(loginDetail.Data));

        const token = loginDetail.Data.Token;
        const memberid = loginDetail.Data.memberid;
        password = data.password;
        setAuthToken(token, memberid, password);

        // getUserData()

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.Data,
        });
      }
    })
    .catch(err => {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
    
};

//   resend opt



export const userMpin = (data, callback) => dispatch => {
  console.log(data);
  return axios
    .post(`${API_URL}/loginByMpinV2_O`, data)

    .then(res => {
       console.log('res',res.headers)
      console.log(res.data);
      let userMpin = res.data;
      console.log(userMpin);
      if (userMpin.code === '302') {
        dispatch({
          type: MPIN_FAIL,
          payload: res.data,
        });
      } else if (userMpin.Data.code === '504') {
        dispatch({
          type: DEVICEID_OTP,
          payload: userMpin.Data,
        });
      } else if (userMpin.Data.code === '200') {
        

        const memberid = userMpin.Data.memberid;
        const token = userMpin.Data.Token;
         password = parseInt( data.mPin)
        SetauthtokenMpin(memberid, token, password);
        AsyncStorage.mergeItem('Loginuser', JSON.stringify(userMpin.Data));

        
        dispatch({
          type: MPIN_SUCCESS,
          payload: res.data.Data,
        });
      }
    })
    .catch(err => {
      alert('Network failed')
      console.log(err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
};

export const otpVerificationforLogin = data => {
  console.log('res', data);
  return async dispatch => {
    try {
      let res = await axios.post(
        `${API_URL}/otpVerificationforLoginV2_O`,
        data,
      );
      let deviceOtp = await res.data;

      console.log('res', deviceOtp);

      if (deviceOtp.code === '306') {
        dispatch({
          type: DEVICE_CHECK_OTP_FAIL,
          payload: deviceOtp,
        });
      } else if (deviceOtp.code === '307') {
        alert('hello');
        dispatch({
          type: DEVICE_CHECK_OTP_FAIL,
          payload: deviceOtp,
        });
      } else if (deviceOtp.Data.code === '200') {
        const token = deviceOtp.Data.Token;
        const memberid = deviceOtp.Data.memberid;
        password = password;
        setAuthToken(token, memberid, password);
        AsyncStorage.setItem('Loginuser', JSON.stringify(deviceOtp.Data));

        dispatch({
          type: DEVICE_CHECK_OTP_SUCCESS,
          payload: deviceOtp.Data,
        });
      }
    } catch (err) {
      alert('Network failed')
      console.log(err);
    }
  };
};

//  export  const otpVerificationforLogin=(data)=>dispatch=>{
//       console.log(data)

//   return   axios.post(`${API_URL}/otpVerificationforLoginV2_O`, data).
//   then(res=>{

//           let deviceOtp=  res.data

//               console.log('res',deviceOtp)

//                     if(deviceOtp.code==="306"){
//                         dispatch({
//                             type:DEVICE_CHECK_OTP_FAIL,
//                             payload:deviceOtp
//                         })

//                     }else if(deviceOtp.code==="307"){
//                         alert('hello')
//                      dispatch({
//                          type:DEVICE_CHECK_OTP_FAIL,
//                          payload:deviceOtp
//                      })

//                  }else  if(deviceOtp.Data.code==="200"){

//                          dispatch({
//                              type:DEVICE_CHECK_OTP_SUCCESS,
//                              payload:deviceOtp.Data
//                          })
//                      }

//         }).catch(err=>{
//             dispatch({
//                 type:CATACH_ERROR,
//                 payload:err
//             })
//         })

//  }

export const forgetPasswordResendOTP = (data, callback) => dispatch => {
  console.log(data);
  axios
    .post(`${API_URL}/resetPasswordByMobileNoV2_O`, data)
    .then(res => {
      console.log('eror', res.data);
      let mobileotp = res.data;

      if (mobileotp.code === '300') {
        alert('please try again');
        dispatch({
          type: FORGOT_PASS_OTP_FAIL,
          payload: res.data,
        });
      }
      if (mobileotp.code === '404') {
         alert('Invaild Details')
        dispatch({
          type: FORGOT_PASS_OTP_FAIL,
          payload: res.data,
        });
      } else if (mobileotp.Data.code === '200') {
        callback();

        dispatch({
          type: FORGOT_PASS_OTP_SUCCESS,
          payload: res.data.Data,
        });
      }
    })
    .catch(err => {
       alert('Network failed')
      console.log(err);
    });
};

export const otpVerification = (data, callback) => dispatch => {
  console.log(data);
  return axios
    .post(`${API_URL}/otpVerificationV2_O`, data)
    .then(res => {
      console.log(res.data);
      let otpDetails = res.data;

      if (otpDetails.code === '306') {
        dispatch({
          type: VALIDATE_OTP_FAIL,
          payload: res.data,
        });
      } else if (otpDetails.Data.code === '200') {
        callback();
        dispatch({
          type: VALIDATE_OTP_SUCCESS,
          payload: res.data.Data,
        });
      } else {
        console.log('err');
      }
    })
    .catch(err => console.log('err', err));
};

export const resendOTP = (data, callback) => dispatch => {
  axios
    .post(`${API_URL}/resendOtppasswordV2_O`, data)
    .then(res => {
      console.log(res.data);
      let otpData = res.data;
      if (otpData.Data.code === '200') {
        callback();

        dispatch({
          type: RESEND_OTP_SUCCESS,
          payload: res.data.Data,
        });
      } else {
        dispatch({
          type: RESEND_OTP_FAIL,
          payload: res.data.Data,
        });
      }
    })
    .catch(err => console.log(err));
};

export const Createpassword = (data, callback) => async dispatch => {
  try {
    let res = await axios.post(`${API_URL}/createPasswordV2_O`, data);
    let passwordDetails = res.data;
    console.log(passwordDetails);
    if (passwordDetails.code === '402') {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: passwordDetails,
      });
    } else if (passwordDetails.Data.code === '200') {
      callback();
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: passwordDetails.Data,
      });
    }
  } catch (err) {
    console.log('password', err);
  }
};

export const ResetMpinByMobileNo = (data, callback) => async dispatch => {
  try {
    let res = await axios.post(`${API_URL}/resetMpinByMobileNoV2_O`, data);
    let mpindata = await res.data;
    if (mpindata.code === '300') {
      dispatch({
        type: FORGET_MPIN_OTP_FAIL,
        payload: mpindata,
      });
    } else if (mpindata.Data.code === '200') {
      callback();
      dispatch({
        type: FORGET_MPIN_OTP_SUCCESS,
        payload: mpindata.Data,
      });
    } else {
      console.log('err');
    }
  } catch (err) {
    console.log('err', err);
  }
};

export const updateMPIN = (data, callback) => async dispatch => {
  console.log(data);
  try {
    let res = await axios.post(`${API_URL}/updateMPINV2_O`, data);
    let updatePin = await res.data;
    console.log(updatePin);
    if (updatePin.code === '307') {
      dispatch({
        type: UPDATE_MPIN_FAIL,
        payload: updatePin,
      });
    } else if (updatePin.Data.code === '200') {
      callback();
      dispatch({
        type: UPDATE_MPIN_SUCCESS,
        payload: updatePin.Data,
      });
    } else {
      console.log('err');
    }
  } catch (err) {
    console.log(err);
  }
};

export const ResendOtpForMPin = data => async dispatch => {
  try {
    let res = await axios.post(`${API_URL}/resendOtpForMPinV2_O`, data);
    let resendOTP = await res.data;
    if ((resendOTP.Data.code = '200')) {
      dispatch({
        type: RESEND_OTP_SUCCESS,
        payload: resendOTP.Data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

//////// get Beenrs

export const getBanners = data => {
   console.log(data)
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getBanners?membarId=${data.membarId}`,
      );

       console.log('banners',res.headers)
      let banners = await res.data;
      console.log('res', banners);
      if (banners.code === '200') {
        dispatch({
          type: GET_BANNERS_SUCCESS,
          payload: banners,
        });
      } else if (banners.code === '403') {
         alert('session expired')
        dispatch({
          type: SESSION_MISSING,
          payload: banners,
        });
      } else {
        dispatch({
          type: SESSION_MISSING,
          payload: banners,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

// edit profil

export const createOtpForEditProfile = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/createOtpForEditProfile?custId=${
          data.membarId
        }&TransType=5`,
      );
      let otp = await res.data;
      console.log('res', otp);
      if (otp.code === '200') {
        dispatch({
          type: CREATE_OTP_EDITPROFILE_SUCCESS,
          payload: otp,
        });
      } else {
        dispatch({
          type: CREATE_OTP_EDITPROFILE_FAIL,
          payload: otp,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const getProfile = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getProfile?membarId=${data.membarId}`,
      );
      let getProfile = await res.data;
      console.log('res', getProfile);
      if (getProfile.code === '200') {
        dispatch({
          type: GET_PROFILE_SUCCUESS,
          payload: getProfile,
        });
      } else if (getProfile.code === '403') {
        this.props.navigation.navigate('Login');
      } else {
        dispatch({
          type: GET_PROFILE_FAIL,
          payload: getProfile,
        });
      }
    } catch (err) {
      console.log(err);
      alert('network Failed')
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const getPrepaidBillerCategories = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getPrepaidBillerCategoriesFromDb`,
      );
      let getPrepaidBiller = await res.data;
      console.log('res', getPrepaidBiller);
      if (getPrepaidBiller.code === '200') {
        dispatch({
          type: GET_PREPAID_BILLER_SUCCESS,
          payload: getPrepaidBiller,
        });
      } else {
        dispatch({
          type: GET_PREPAID_BILLER_FAIL,
          payload: getPrepaidBiller,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const updateProfile = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/updateProfileDetails?membarId=${data.membarId}&refNo=${
          data.refNo
        }&otp=${data.otp}`,
      );
      let updateProfileData = await res.data;
      console.log('res', updateProfileData);
      if (updateProfileData.code === '200') {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: updateProfileData,
        });
      } else {
        dispatch({
          type: UPDATE_PROFILE_FAIL,
          payload: updateProfileData,
        });
      }
    } catch (err) {
      alert('network Failed')
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const resendOtpForEditProfile = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/resendOtpForEditProfile?custId=${data.membarId}&refNo=${
          data.refNo
        }`,
      );
      let resenOtpProfile = await res.data;
      console.log('res', resenOtpProfile);
      if (resenOtpProfile.code === '200') {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: resenOtpProfile,
        });
      } else {
        dispatch({
          type: UPDATE_PROFILE_FAIL,
          payload: resenOtpProfile,
        });
      }
    } catch (err) {

      alert('network Failed')
      console.log(err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const getLastTentxns = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getLastTentxns?membarId=${data.membarId}`,
      );
      let getLastTransaction = await res.data;
      console.log('res', getLastTransaction);
      if (getLastTransaction.code === '200') {
        dispatch({
          type: GET_TRANSACTION_SUCCESS,
          payload: getLastTransaction,
        });
      } else {
        dispatch({
          type: GET_TRANSACTION_FAIL,
          payload: getLastTransaction,
        });
      }
    } catch (err) {
      console.log(err);
      alert('network Failed')
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const sendStatement = data => {
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/sendStatementTwodates?membarId=${
          data.membarId
        }&fromdate=${data.fromdate}&todate=${data.todate}`,
      );
      let statement = await res.data;
      console.log('res', statement);
      if (statement.code === '200') {
         alert('success')
        dispatch({
          type: STATEMENT_DATE_SUCCESS,
          payload: statement,
        });

         
      } else if (statement.code === '403') {
        alert('session exparid');
        this.props.navigation.navigate('Login');
        dispatch({
          type: SESSION_MISSING,
          payload: statement,
        });
      } else {
        dispatch({
          type: STATEMENT_DATE_FAIL,
          payload: statement,
        });
      }
    } catch (err) {
      console.log(err);
       alert('network Failed')
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};


export const getEula = data => {
  console.log(data)
 return async dispatch => {
   try {
     const res = await axios.get(
       `${API_URL}/getEulaHtml`,
     );

     
     let eulaDetails = await res.data;
      console.log('res', eulaDetails);
     if (eulaDetails.code === '200') {
       dispatch({
         type: GET_EULA_SUCCESS,
         payload: eulaDetails,
       });
     } 
   } catch (err) {
     console.log(err);
     dispatch({
       type: CATACH_ERROR,
       payload: err,
     });
   }
 };
};



export const getRDcharts = data => {
  console.log(data)
 return async dispatch => {
   try {
     const res = await axios.get(
       `${API_URL}/getRDcharts`,
     );

     
     let getRDcharts = await res.data;
      console.log('res', getRDcharts);
     if (getRDcharts.code === '200') {
       dispatch({
         type: GET_RD_URL,
         payload: getRDcharts,
       });
     } 
   } catch (err) {
     console.log(err);
     dispatch({
       type: CATACH_ERROR,
       payload: err,
     });
   }
 };
};


export const Fdcharts = data => {
  console.log(data)
 return async dispatch => {
   try {
     const res = await axios.get(
       `${API_URL}/getFdchartV2_O `,
     );

     
     let FdchartUrl = await res.data;
      console.log('res', FdchartUrl);
     if (FdchartUrl.Data.code === '200') {
       dispatch({
         type: FD_CHART_URL_SUCCESS,
         payload: FdchartUrl.Data
       });
     }else if(FdchartUrl.code==="403"){
      dispatch({
        type: FD_CHART_URL_SUCCESS,
        payload: FdchartUrl,
      });
        
     }
   } catch (err) {
     console.log(err);
     dispatch({
       type: CATACH_ERROR,
       payload: err,
     });
   }
 };
};


