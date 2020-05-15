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
      console.log('res', payoutStatus);
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






export const TransferWithincoop = data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/transferWithOutCoopV1_3?membarId=${data.memberID}&amount=${data.amount}
        &accountNo=${data.amount}&accountHolderName=${data.type}&isfcCode=${data.ifcscode}&bank=OTHERS&discription=${data.discription}&refNo=${data.refNo}&otp=${data.otp}$charges=${data.charges}&paymentType=${data.paymentType}`,);
         
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
        `${API_URL}/createOtpV1_3_5?custId=${data.memberID} &toMembarNumebr=${data.toMembarNumebr}&TransType=${data.TransType}&amount=${data.amount}&memberOf=${data.memberOf}`,);
         
       
      let payoutStatus = await res.data;
      console.log('res', payoutStatus);
      if (payoutStatus.code === '200') {
        dispatch({
          type: CREATE_OTP_BUSINESS_SUCCESS,
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






/// spark Business and Spark account



export const transferWithinCoopSPark= data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(
        `${API_URL}/transferWithinCoopV1_3?fromMembarId=${data.memberID}
        &toMembarNumebr=${data.toMembarNumebr}&transferAmount=${data.transferAmount}&refNo=${data.refNo}&otp=${data.otp}$charges=${data.charges}&Descr=${data.Descr}`,);
         
      let withincoopDetails = await res.data;
      console.log('res', withincoopDetails);
      if (withincoopDetails.code === '200') {
        dispatch({
          type: TRANSACTION_WITHINCOOP_SPARK_SUCCESS,
          payload: withincoopDetails,
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















