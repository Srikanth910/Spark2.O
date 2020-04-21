import axios from 'axios';
import {
    LOGIN_SUCCESS, LOGIN_FAIL, GET_ERROR,
    MPIN_SUCCESS, MPIN_FAIL, FORGOT_PASS_OTP_FAIL,
    FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL,
    FORGET_MPIN_SUCCESS, FORGET_MPIN_FAIL,
    FORGOT_PASS_OTP_SUCCESS, RESEND_OTP_SUCCESS,
    RESEND_OTP_FAIL,
    DEVICEID_OTP,
    DEVICE_CHECK_OTP_SUCCESS,

    VALIDATE_OTP_SUCCESS, VALIDATE_OTP_FAIL, FORGET_MPIN_OTP_FAIL, FORGET_MPIN_OTP_SUCCESS, UPDATE_MPIN_FAIL, UPDATE_MPIN_SUCCESS, LOGIN_LOADNIG, CATACH_ERROR,
     DEVICE_CHECK_OTP_FAIL
} from '../constants/types';
const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';
export const loginUser = (data) => async dispatch => {

      console.log(data)
    return  axios.post(`${API_URL}/loginByPasswordV2_O `, data)
        .then(res => {
            console.log('res', res.data)

             let loginDetail= res.data
              console.log('rea',loginDetail)
            if (loginDetail.code === "309") {
                console.log('err')
                dispatch({
                    type: LOGIN_FAIL,
                    payload: res.data
                })
            } else if(loginDetail.code==="504"){
              
                dispatch({
                    type: DEVICEID_OTP,
                    payload:loginDetail
                })
            } 
            
            else if (loginDetail.Data.Message === 'SUCCESS') {

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.Data
                })

            }
        }).catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        })
}
export const userMpin = (data, callback) => dispatch => {
    console.log(data)
    
     return axios.post(`${API_URL}/loginByMpinV2_O`, data)
        .then(res => {
    
             console.log(res.data)
            let userMpin = res.data
             console.log(userMpin)
            if (userMpin.code === "302") {
               
                dispatch({
                    type: MPIN_FAIL,
                    payload: res.data
                })


            } else if(userMpin.Data.code==="504"){
               
                dispatch({
                    type:DEVICEID_OTP,
                    payload: userMpin.Data

                })
                
            }
            else if (userMpin.Data.code === "200") {
               
                dispatch({
                    type: MPIN_SUCCESS,
                    payload: res.data.Data
                })
            }
        }).catch(err => {
             console.log(err)
             dispatch({
                 type:GET_ERROR,
                 payload:err
             })
        })
}


 export const   otpVerificationforLogin=(data)=>{
      console.log('res',data)
     return async dispatch=>{
        try{
         let  res=  await axios.post(`${API_URL}/otpVerificationforLoginV2_O`, data)
           let deviceOtp= await res.data

              console.log('res',deviceOtp)

                    if(deviceOtp.code==="306"){
                        dispatch({
                            type:DEVICE_CHECK_OTP_FAIL,
                            payload:deviceOtp
                        })

                    
                    }else if(deviceOtp.code==="307"){
                        alert('hello')
                     dispatch({
                         type:DEVICE_CHECK_OTP_FAIL,
                         payload:deviceOtp
                     })

                 }else if(deviceOtp.Data.code==="200"){
                    
                         dispatch({
                             type:DEVICE_CHECK_OTP_SUCCESS,
                             payload:deviceOtp.Data
                         })
                     }
    

       }catch(err){
             console
             .log(err)

       }

          
     } 
 }

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
    console.log(data)
    axios.post(`${API_URL}/resetPasswordByMobileNoV2_O`, data)
        .then(res => {
            console.log('eror', res.data)
            let mobileotp = res.data
            if (mobileotp.code === '404') {
                dispatch({
                    type: FORGOT_PASS_OTP_FAIL,
                    payload: res.data

                })

            } else if (mobileotp.Data.code === "200") {
                callback();

                dispatch({
                    type: FORGOT_PASS_OTP_SUCCESS,
                    payload: res.data.Data
                })

            }

        }).catch(err => {
            console.log(err)
        })
}

export const otpVerification = (data, callback) => dispatch => {
    console.log(data)
   return  axios.post(`${API_URL}/otpVerificationV2_O`, data)
        .then(res => {
            console.log(res.data);
            let otpDetails = res.data
           
            
            if (otpDetails.code === "306") {
                dispatch({
                    type: VALIDATE_OTP_FAIL,
                    payload: res.data
                })
            } else if (otpDetails.Data.code === "200") {
                callback();
                dispatch({
                    type: VALIDATE_OTP_SUCCESS,
                    payload: res.data.Data
                })
            }else{
                 console.log('err')
            }


        }).catch(err => console.log('err', err))
}

export const resendOTP = (data, callback) => dispatch => {
    axios.post(`${API_URL}/resendOtppasswordV2_O`, data)
        .then(res => {
            console.log(res.data);
            let otpData = res.data
            if (otpData.Data.code === "200") {
                callback()

                dispatch({
                    type: RESEND_OTP_SUCCESS,
                    payload: res.data.Data
                })

            } else {
                dispatch
                    ({
                        type: RESEND_OTP_FAIL,
                        payload: res.data.Data
                    })
            }


        }).catch(err => console.log(err))
}


export const Createpassword = (data, callback) => async dispatch => {
    try {
        let res = await axios.post(`${API_URL}/createPasswordV2_O`, data)
        let passwordDetails = res.data
        console.log(passwordDetails)
        if (passwordDetails.code === "402") {
            dispatch({
                type: FORGOT_PASSWORD_FAIL,
                payload: passwordDetails
            })
        } else if (passwordDetails.Data.code === "200") {
            callback();
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS,
                payload: passwordDetails.Data
            })
        }



    } catch (err) {
        console.log('password', err)
    }
}



export const ResetMpinByMobileNo = (data, callback) => async dispatch => {
    try {
        let res = await axios.post(`${API_URL}/resetMpinByMobileNoV2_O`, data)
        let mpindata = await res.data
        if (mpindata.code === "300") {

            dispatch({
                type: FORGET_MPIN_OTP_FAIL,
                payload: mpindata
            })

        } else if (mpindata.Data.code === "200") {

            callback()
            dispatch({
                type: FORGET_MPIN_OTP_SUCCESS,
                payload: mpindata.Data
            })

        } else {
            console.log('err')
        }


    } catch (err) {
        console.log('err', err)

    }


}

export const updateMPIN = (data, callback) => async  dispatch => {
    try {
        let res = await axios.post(`${API_URL}/updateMPINV2_O`, data)
        let updatePin = await res.data
        console.log(updatePin)
        if (updatePin.code === '307') {

            dispatch({
                type: UPDATE_MPIN_FAIL,
                payload: updatePin
            })

        } else if (updatePin.Data.code === "200") {
            callback()
            dispatch({
                type: UPDATE_MPIN_SUCCESS,
                payload: updatePin.Data
            })

        } else {
            console.log('err')
        }
    } catch (err) {
        console.log(err)
    }
}

export const ResendOtpForMPin = (data) => async dispatch => {

    try {
        let res = await axios.post(`${API_URL}/resendOtpForMPinV2_O`, data)
        let resendOTP = await res.data
        if (resendOTP.Data.code = "200") {
          
            dispatch({
                type: RESEND_OTP_SUCCESS,
                payload: resendOTP.Data
            })

        }



    } catch (err) {
        console.log(err)
    }


}