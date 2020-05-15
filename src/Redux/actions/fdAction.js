import  axios from 'axios'
import { GET_ACTIVE_FD_SUCCESS, GET_ACTIVE_FD_FAIL, INSERT_CUSTMER_DETAILS_FAIL, INSERT_CUSTMER_DETAILS_SUCCESS, GET_ACTIVE_REFERRAL_CODE_SUCCESS, CREATE_OTP_FD_SUCCESS, CREATE_OTP_FD_FAIL, RESEND_OTP_FD_SUCESS, RESEND_OTP_FD_FAIL, CREARE_FD_SUCCESS, CREARE_FD_FAIL, VIEW_FD_SUCCESS, VIEW_FD_FAIL, STATEMENT_FD_SUCCESS, SEND_FD_STATEMENT_SUCCESS, SEND_FD_STATEMENT_FAIL, GET_CANCEL_FD_SUCCESS, GET_CANCEL_FD_FAIL, CREATE_OTPFD_CANCEL_SUCCESS, GET_FD_CHART_SUCCESS, GET_FD_CHART_FAIL, CREATE_OTP_RD_FAIL, CREATE_OTP_RD_SUCCESS, RESEND_OTP_RD_SUCCESS, RESEND_OTP_RD_FAIL, CREATE_RD_SUCCESS, CREATE_RD_FAIL, ACTIVE_RD_SUCCESS } from '../constants/types';



const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';
 




export const getActiveFlexibleFd = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.get(`${API_URL}/getActiveFlexibleFdsV2_O`,    );
          
    
        let getLastTransaction = await res.data;
        console.log('res', getLastTransaction);
        if (getLastTransaction.code === '200') {
          dispatch({
            type: GET_ACTIVE_FD_SUCCESS,
            payload: getLastTransaction,
          });
        } else {
          dispatch({
            type: GET_ACTIVE_FD_FAIL,
            payload: getLastTransaction,
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




  

  


export const InsertCustomerNomineeDetails = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.get(
          `${API_URL}/InsertCustomerNomineeDetailsV2_O`,data
        );
        let getLastTransaction = await res.data;
        console.log('res', getLastTransaction);
        if (getLastTransaction.code === '200') {
          dispatch({
            type: INSERT_CUSTMER_DETAILS_SUCCESS,
            payload: getLastTransaction,
          });
        } else {
          dispatch({
            type: INSERT_CUSTMER_DETAILS_FAIL,
            payload: getLastTransaction,
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


  



  
export const getActiveReferralCode = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post( `${API_URL}/getActiveReferralCodeV2_O`,data  );
         
      
        let getLastTransaction = await res.data;
        console.log('res', getLastTransaction);
        if (getLastTransaction.code === '200') {
          dispatch({
            type: GET_ACTIVE_REFERRAL_CODE_SUCCESS,
            payload: getLastTransaction,
          });
        } else {
          dispatch({
            type: GET_ACTIVE_REFERRAL_CODE_SUCCESS,
            payload: getLastTransaction,
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



   



  
  
export const createOTPFD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createOTPFDV2_O`,data
        );
        let createOtp = await res.data;
        console.log('res', createOtp);
        if (createOtp.code === '200') {
          dispatch({
            type: CREATE_OTP_FD_SUCCESS,
            payload: createOtp,
          });
        } else {
          dispatch({
            type: CREATE_OTP_FD_FAIL,
            payload: createOtp,
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




   





  
  
export const createFDV2_O  = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createFDV2_O `,data
        );
        let statementDetails = await res.data;
        console.log('res', statementDetails);
        if (statementDetails.code === '200') {
          dispatch({
            type: CREARE_FD_SUCCESS,
            payload: statementDetails,
          });
        } else {
          dispatch({
            type: CREARE_FD_FAIL,
            payload: statementDetails,
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




   

  
  
  
export const createFD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createFDV2_O`,data
        );
        let createFDDEtails = await res.data;
        console.log('res', resendOtp);
        if (resendOtp.code === '200') {
          dispatch({
            type: RESEND_OTP_FD_SUCESS,
            payload: resendOtp,
          });
        } else {
          dispatch({
            type: RESEND_OTP_FD_FAIL,
            payload: resendOtp,
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


  

  
export const ViewFDV = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/ViewFDV2_O`,data
        );
        let viewFDDetail = await res.data;
        console.log('res', resendOtp);
        if (resendOtp.code === '200') {
          dispatch({
            type: VIEW_FD_SUCCESS,
            payload: resendOtp,
          });
        } else {
          dispatch({
            type: VIEW_FD_FAIL,
            payload: resendOtp,
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


  


   

  

  
export const StatementFD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/StatementFDV2_O`,data
        );
        let statementDetails = await res.data;
        console.log('res', statementDetails);
        if (statementDetails.code === '200') {
          dispatch({
            type:STATEMENT_FD_SUCCESS ,
            payload: statementDetails,
          });
        } else {
          dispatch({
            type: STATEMENT_FD_FAIL,
            payload: statementDetails,
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




   




  

  
export const send_Fd_statement = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/send_Fd_statementV2_O`,data
        );
        let statementDetails = await res.data;
        console.log('res', statementDetails);
        if (statementDetails.code === '200') {
          dispatch({
            type:SEND_FD_STATEMENT_SUCCESS ,
            payload: statementDetails,
          });
        } else {
          dispatch({
            type: SEND_FD_STATEMENT_FAIL,
            payload: statementDetails,
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



   



  
  
export const getCancelFD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/getCancelFDV2_O`,data
        );
        let getcancelDetails = await res.data;
        console.log('res', getcancelDetails);
        if (getcancelDetails.code === '200') {
          dispatch({
            type:GET_CANCEL_FD_SUCCESS ,
            payload: getcancelDetails,
          });
        } else {
          dispatch({
            type:GET_CANCEL_FD_FAIL,
            payload: getcancelDetails,
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



  
  



    
export const createOTPFDCancel = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createOTPFDCancelV2_O`,data
        );
        let otpFDCancel = await res.data;
        console.log('res', otpFDCancel);
        if (otpFDCancel.code === '200') {
          dispatch({
            type:CREATE_OTPFD_CANCEL_SUCCESS ,
            payload: otpFDCancel,
          });
        } else {
          dispatch({
            type:CREATE_OTPFD_CANCEL_FAIL,
            payload: otpFDCancel,
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





   





  
export const getFdchart = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/getFdchartV2_O`,data
        );
        let fdchartDetails = await res.data;
        console.log('res', fdchartDetails);
        if (fdchartDetails.code === '200') {
          dispatch({
            type:GET_FD_CHART_SUCCESS ,
            payload: fdchartDetails,
          });
        } else {
          dispatch({
            type:GET_FD_CHART_FAIL,
            payload: fdchartDetails,
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


   //// rd flow


   




   
  
export const createOTPRD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createOTPRD_V2_O `,data
        );
        let  createotpRD = await res.data;
        console.log('res', createotpRD);
        if (createotpRD.code === '200') {
          dispatch({
            type:CREATE_OTP_RD_SUCCESS ,
            payload: createotpRD,
          });
        } else {
          dispatch({
            type:CREATE_OTP_RD_FAIL,
            payload: createotpRD,
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



    




  
export const resendOtpRD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/resendOTPRD_V2_O`,data
        );
        let  rensendOtp = await res.data;
        console.log('res', rensendOtp);
        if (rensendOtp.code === '200') {
          dispatch({
            type:RESEND_OTP_RD_SUCCESS ,
            payload: rensendOtp,
          });
        } else {
          dispatch({
            type:RESEND_OTP_RD_FAIL,
            payload: rensendOtp,
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




    






  
export const createRD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/createRD_V2_O`,data
        );
        let  createRD = await res.data;
        console.log('res', createRD);
        if (createRD.code === '200') {
          dispatch({
            type:CREATE_RD_SUCCESS ,
            payload: createRD,
          });
        } else {
          dispatch({
            type:CREATE_RD_FAIL,
            payload: createRD,
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










  
  
export const activeRD = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/activeRDS_V2_O`,data
        );
        let  activeRD = await res.data;
        console.log('res', activeRD);
        if (activeRD.code === '200') {
          dispatch({
            type:ACTIVE_RD_SUCCESS ,
            payload: activeRD,
          });
        } else {
          dispatch({
            type:AC,
            payload: activeRD,
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

