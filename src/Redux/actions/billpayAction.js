import axios from 'axios';
import { CATAGORY_RECENT_TXNS_SUCCESS, CATAGORY_RECENT_TXNS_FAIL, CATACH_ERROR, GET_CUSTMER_DETAILS_SUCCESS, GET_CUSTMER_DETAILS_FAIL, SEND_BILL_FETCH_SUCCESS, SEND_BILL_FETCH_FAIL, CONENIENCE_FEES_SUCCESS, CONENIENCE_FEES_FAIL, GET_PROMO_CODE_SUCCESS, GET_PROMO_CODE_FAIL, OTP_BILL_PAYMENT_SUCCESS, OTP_BILL_PAYMENT_FAIL } from '../constants/types';
const API_URL = 'https://sparkinapp.assccl.com:8443/vk-syndicatePrepaid/rest';







export const  GetBillersByCategoryAndRecentTxns= data => {
    console.log('uires',data);
    return async dispatch => {
      try {
        const res = await axios.post(`${API_URL}/GetBillersByCategoryAndRecentTxnsForApp`,data)   
    
        let catagorydetails = await res.data;
        console.log('res', catagorydetails);
        if (catagorydetails.code === '200') {
          dispatch({
            type: CATAGORY_RECENT_TXNS_SUCCESS,
            payload: catagorydetails,
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




  
  

  
  

export const  GetCustomerParamsByBillerId= data => {
    console.log('uires',data);
    return async dispatch => {
      try {
        const res = await axios.post(`${API_URL}/GetCustomerParamsByBillerIdForApp`,data)   
    
        let getCutomerDetails = await res.data;
        console.log('res', getCutomerDetails);
        if (getCutomerDetails.code === '200') {
          dispatch({
            type: GET_CUSTMER_DETAILS_SUCCESS,
            payload: getCutomerDetails,
          });
        }else{
            dispatch({
                type: GET_CUSTMER_DETAILS_FAIL,
                payload: getCutomerDetails,
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




  





  

export const  SendBillFetchRequest= data => {
    console.log('uires',data);
    return async dispatch => {
      try {
        const res = await axios.post(`${API_URL}/SendBillFetchRequestForApp`,data)   
    
        let sendBillDetails = await res.data;
        console.log('res', sendBillDetails);
        if (sendBillDetails.code === '200') {
          dispatch({
            type: SEND_BILL_FETCH_SUCCESS,
            payload: sendBillDetails,
          });
        }else{
            dispatch({
                type: SEND_BILL_FETCH_FAIL,
                payload: sendBillDetails,
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




  

export const  CalculateConvenienceFees= data => {
    console.log('uires',data);
    return async dispatch => {
      try {
        const res = await axios.post(`${API_URL}/CalculateConvenienceFeesForApp`,data)   
    
        let  convenienceFees = await res.data;
        console.log('res', sendBillDetails);
        if (convenienceFees.code === '200') {
          dispatch({
            type: CONENIENCE_FEES_SUCCESS,
            payload: convenienceFees,
          });
        }else{
            dispatch({
                type: CONENIENCE_FEES_FAIL,
                payload: convenienceFees,
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




   

  

  





  

export const  getActivePromoCodes= data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.get(`${API_URL}/getActivePromoCodes?CustomerId=${data.CustomerId}`,)   
  
      let getPromoCodes = await res.data;
      console.log('res', getPromoCodes);
      if (getPromoCodes.code === '200') {
        dispatch({
          type: GET_PROMO_CODE_SUCCESS,
          payload: getPromoCodes,
        });
      }else{
          dispatch({
              type: GET_PROMO_CODE_FAIL,
              payload: getPromoCodes,
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






export const  otpForBillPayment= data => {
  console.log('uires',data);
  return async dispatch => {
    try {
      const res = await axios.post(`${API_URL}/otpForBillPayment`,data)   
  
      let OtpForBIll = await res.data;
      console.log('res', OtpForBIll);
      if (OtpForBIll.code === '200') {
        dispatch({
          type: OTP_BILL_PAYMENT_SUCCESS,
          payload: OtpForBIll,
        });
      }else{
          dispatch({
              type: OTP_BILL_PAYMENT_FAIL,
              payload: OtpForBIll,
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

