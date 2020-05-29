
 import axios from 'axios'
import {API_URL} from '../actions/authAction';
import { INSERT_REFFERAL_CODE_SUCCESS, INSERT_REFFERAL_CODE_FAIL, PERSONAL_INFO_SUCCESS, PERSONAL_INFO_FAIL } from '../constants/types';



export const activeReferralCode  = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/insertActiveReferralCodeNewV2_O `,data
           
        );
        let  refferalCode = await res.data;
        console.log('res', refferalCode);
        if (refferalCode.code === '200') {
          dispatch({
            type: INSERT_REFFERAL_CODE_SUCCESS,
            payload: refferalCode,
          });
        } else if (refferalCode.code === '403') {
          dispatch({
            type: INSERT_REFFERAL_CODE_SUCCESS,
            payload: refferalCode,
          });
        }else{
             dispatch({
                  type:INSERT_REFFERAL_CODE_FAIL,
                   payload:refferalCode
             })
        }
      } catch (err) {
         alert('Network Failed')
        console.log(err);
        dispatch({
          type: CATACH_ERROR,
          payload: err,
        });
      }
    };
  };
  

 

  
export const personalInfo  = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/InsertCustomerPersonalInfoV2_O `,data
           
        );
        let  personalDetails = await res.data;
        console.log('res', refferalCode);
        if (personalDetails.code === '200') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: personalDetails,
          });
        } else if (personalDetails.code === '403') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: personalDetails,
          });
        }else{
             dispatch({
                  type:PERSONAL_INFO_FAIL,
                   payload:personalDetails
             })
        }
      } catch (err) {
         alert('Network Failed')
        console.log(err);
        dispatch({
          type: CATACH_ERROR,
          payload: err,
        });
      }
    };
  };
  


  
export const NomineeInfo  = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL}/
          InsertCustomerNomineeInfoV2_O `,data
           
        );
        let  nomineeDetails = await res.data;
        console.log('res', nomineeDetails);
        if (nomineeDetails.code === '200') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: nomineeDetails,
          });
        } else if (nomineeDetails.code === '403') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: nomineeDetails,
          });
        }else{
             dispatch({
                  type:PERSONAL_INFO_FAIL,
                   payload:nomineeDetails
             })
        }
      } catch (err) {
         alert('Network Failed')
        console.log(err);
        dispatch({
          type: CATACH_ERROR,
          payload: err,
        });
      }
    };
  };
  


  
  
export const getdocStatus  = data => {
    console.log(data);
    return async dispatch => {
      try {
        const res = await axios.post(
          `${API_URL} getdocsStatusV2_O `,data
           
        );
        let  docStatusDetails = await res.data;
        console.log('res', docStatusDetails);
        if (docStatusDetails.code === '200') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: docStatusDetails,
          });
        } else if (docStatusDetails.code === '403') {
          dispatch({
            type: PERSONAL_INFO_SUCCESS,
            payload: docStatusDetails,
          });
        }else{
             dispatch({
                  type:PERSONAL_INFO_FAIL,
                   payload:docStatusDetails
             })
        }
      } catch (err) {
         alert('Network Failed')
        console.log(err);
        dispatch({
          type: CATACH_ERROR,
          payload: err,
        });
      }
    };
  };
  