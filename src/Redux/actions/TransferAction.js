import axios from 'axios';
import {
  GET_ACTIVE_METHOD,
  CATACH_ERROR,
  GET_BENECIARY_ACCOUNT,
  GET_PAYOUT_STATUS_SUCCESS,
  CREATE_OTP_OUTSIDE_SUCCESS,
  TRANSACTION_WITHINCOOP_SUCCESS,
  CREATE_OTP_BUSINESS_SUCCESS,
  TRANSACTION_WITHINCOOP_SPARK_SUCCESS,
  TRANSACTION_WITHINCOOP_SPARK_FAIL,
  CREATE_SCHEDULE_SUCCESS,
  CREATE_SCHEDULE_FAIL,
  CREATE_OTP_SCHEDULE_SUCCESS,
  CREATE_OTP_SCHEDULE_FAIL,
  RESEND_OTP_SCHEDULE_SUCCESS,
  RESEND_OTP_SCHEDULE_FAIL,
  ACCOUNT_BALANCE_RAZORPAY_SUCCESS,
  SESSION_MISSING,
} from '../constants/types';

const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';

export const getActivemethods = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/getActivemethod `);
      let getMethods = await res.data;
      console.log('res', getMethods);
      if (getMethods.code === '200') {
        dispatch({
          type: GET_ACTIVE_METHOD,
          payload: getMethods,
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

//   TO my bank account

export const getBeneficiaryBank = data => {
  console.log(data);

  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getBeneficiaryV_1_3_5?membarId=${
          data.membarId
        }&isPrimaryAccunt=${data.isPrimaryAccunt}&isWithInCoop=${
          data.isWithInCoop
        }&type=${data.type}`,
      );

      let bankDetails = await res.data;
      console.log('res', bankDetails);
      if (bankDetails.code === '200') {
        dispatch({
          type: GET_BENECIARY_ACCOUNT,
          payload: bankDetails,
        });
      }
    } catch (err) {
      console.log('errorres', err);
      dispatch({
        type: CATACH_ERROR,
        payload: err,
      });
    }
  };
};

export const getpayoutstatus = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/getpayoutstatusIos?custid=${data.memberID}&amount=${data.amount}&type=${data.type}`,);
         
      let payoutStatus = await res.data;
      console.log('resStatus', payoutStatus);
      if (payoutStatus.code === '200') {
        dispatch({
          type: GET_PAYOUT_STATUS_SUCCESS,
          payload: payoutStatus,
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



export const createOtpOutside = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/createOtpForOutSide?custId=1421
        &TransType=${data.TransType}&amount=${data.amount}&charges=${data.charges}`,);
  
        
         
      let payoutStatus = await res.data;
      console.log('res', payoutStatus);
      if (payoutStatus.code === '200') {
        dispatch({
          type: CREATE_OTP_OUTSIDE_SUCCESS,
          payload: payoutStatus,
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






export const addSavingsAccountBalanceRazorpay = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/addSavingsAccountBalanceRazorpay?membarId=${data.membarId}&balance=${data.amount}&chargeAmount=0.0&isServiceChargePayedByCust=no&isShareBuy=false&pgTransId=${data.id}`)
         
      let razorpayDetails = await res.data;
      console.log('res', payoutStatus);
      if (razorpayDetails.code === '200') {
        dispatch({
          type: ACCOUNT_BALANCE_RAZORPAY_SUCCESS,
          payload: razorpayDetails,
        });
      }else if(razorpayDetails.code==="403"){

         dispatch({
            type:SESSION_MISSING,
             payload:razorpayDetails
         })
      }else{
         alert ('network falid')
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



export const TransferWithincoop = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/ transferWithOutCoopV1_3?membarId=1421&accountNo=${data.accountNo}&accountHolderName=${data.accountHolderName}&isfcCode=${data.isfcCode}&bank=OTHERS&amount=${data.amount}&discription=${data.discription}&refNo=${data.refNo}&otp=${data.otp}&charges=${data.charges}&paymentType=${data.paymentType}`)
      let payoutStatus = await res.data;
      console.log('res', payoutStatus);
      if (payoutStatus.code === '200') {
        dispatch({
          type: TRANSACTION_WITHINCOOP_SUCCESS,
          payload: payoutStatus,
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



// bussiners accoint
export const createOtpBusiness = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/createOtpV1_3_5?custId=${data.custId}&toMembarNumebr=${data.accountNo}&TransType=1&amount=${data.amount}&memberOf=${data.method}`)
        
        // createOtpV1_3_5?custId=${data.memberID}&toMembarNumebr=${data.toMembarNumebr}&TransType=1&amount=${data.amount}&memberOf=${data.memberOf}`);
         
       

      let payoutStatus = await res.data;
      console.log('res', payoutStatus);
      if (payoutStatus.code === '200') {
        dispatch({
          type: CREATE_OTP_BUSINESS_SUCCESS,
          payload: payoutStatus,
        });
      }else{
         alert('invalid otp')
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






/// spark Business and Spark account



export const transferWithinCoopSPark= data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/transferWithinCoopV1_3?fromMembarId=${data.fromMembarId}
        &toMembarNumebr=${data.toMembarNumebr}&transferAmount=${data.transferAmount}&refNo=${data.refNo}&otp=${data.otp}&Descr=${data.Descr}&memberOf=${data.method}`,);
         
      let withincoopDetails = await res.data;
      console.log('res', withincoopDetails);
      if (withincoopDetails.code === '200') {
        dispatch({
          type: TRANSACTION_WITHINCOOP_SPARK_SUCCESS,
          payload: withincoopDetails,
        });
      }else {
         dispatch({
            type:TRANSACTION_WITHINCOOP_SPARK_FAIL, 
            payload:withincoopDetails
         })
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











 



export const createSchedulePayout = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/createSchedulePayoutV2_O`, data)
      let scheduleDetails = await res.data;
      console.log('res', payoutStatus);
      if (scheduleDetails.code === '200') {
        dispatch({
          type: CREATE_SCHEDULE_SUCCESS,
          payload: scheduleDetails,
        });
      }else{
         dispatch({
            type:CREATE_SCHEDULE_FAIL,
             payload:scheduleDetails
         })
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






export const createOtpForSchedulePayout = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/createOtpForSchedulePayout_V2_O`, data)
      let  otpSchedule = await res.data;
      console.log('res', payoutStatus);
      if (otpSchedule.code === '200') {
        dispatch({
          type: CREATE_OTP_SCHEDULE_SUCCESS,
          payload: otpSchedule,
        });
      }else{
         dispatch({
            type:CREATE_OTP_SCHEDULE_FAIL,
             payload:otpSchedule
         })
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








export const resendOtpForSchedulePayout = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/resendOtpForSchedulePayout_V2_O`, data)
      let  resendOtp = await res.data;
      console.log('res', payoutStatus);
      if (resendOtp.code === '200') {
        dispatch({
          type: RESEND_OTP_SCHEDULE_SUCCESS,
          payload: resendOtp,
        });
      }else{
         dispatch({
            type:RESEND_OTP_SCHEDULE_FAIL,
             payload:resendOtp
         })
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

