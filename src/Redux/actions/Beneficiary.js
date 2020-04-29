const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';
import axios from 'axios';
import { CREATE_OTP_BENEFICIARY_SUCCESS, CREATE_OTP_BENEFICIARY_FAIL, CATACH_ERROR, RESEND_OTP_BENEFICIARY_FAIL, RESEND_OTP_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_FAIL, ADD_BENEFICIARY_SUCCESS, GET_BENEFICIARY_FAIL, GET_BENEFICIARY_SUCCESS, REMOVE_BENEFICIARY_FAIL,
    UPDATE_BENEFICIARY_SUCCESS,
    UPDATE_BENEFICIARY_FAIL,
    
    REMOVE_BENEFICIARY_SUCCESS, 
    GET_MEMBER_DT_SUCCESS,
    GET_MEMBER_DT_FAIL} from '../constants/types';





 export const createOtpBeneficiary=(data)=>{
       console.log(data)
    return  async dispatch=>{
          try{
         const res = await axios.post(`${API_URL}/createOtpForAddBeneficiary_V2_O `, data)
         let OtpBeneficiary = await res.data
          console.log('res',OtpBeneficiary)
          if(OtpBeneficiary.code==="313"){
               dispatch({
                    type:CREATE_OTP_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
          
               dispatch({
                    type:CREATE_OTP_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
}
 }

 
 export const resendOtpBeneficiary=(data, callback)=>async dispatch=>{
    try{
         const res =  axios.post(`${API_URL}/resendOtpForAddBeneficiary_V2_O`, data)
         let OtpBeneficiary = await res.data
          if(OtpBeneficiary.code===""){
               dispatch({
                    type:RESEND_OTP_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
               callback();
               dispatch({
                    type:RESEND_OTP_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
 }
 
 export const addBeneficiary=(data, callback)=>async dispatch=>{
    try{
         const res =  axios.post(`${API_URL}/addBeneficiary_V2_O`, data)
         let OtpBeneficiary = await res.data
          if(OtpBeneficiary.code===""){
               dispatch({
                    type:ADD_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
               callback();
               dispatch({
                    type:ADD_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
 }
 



 export const getmemberDetails=(data)=>{
       console.log(data)

     return async dispatch=>{

     
     try{
          const res = await  axios.post(`${API_URL}/membarDetailsByMobileNoOrAccNo_V2_O`, data)
          
         
          let memberDetials = await res.data
           console.log(memberDetials)
           if(memberDetials.code==="404"){
                dispatch({
                     type:GET_MEMBER_DT_FAIL,
                     payload:memberDetials
                })
 
           }else if(memberDetials.Data.code==="200"){
                callback();
                dispatch({
                     type:GET_MEMBER_DT_SUCCESS,
                     payload:memberDetials.Data
                })
           }
 
     }catch(err){
           console.log(err)
          dispatch({
              type:CATACH_ERROR,
              payload:err
          })
          
          
     }
  }
  

 }

 export const getBeneficiary=(data, callback)=>{
       console.log(data)

return async dispatch=>{


    try{
         const res =  axios.post(`${API_URL}/getBeneficiaryV2_O`, data)
         let OtpBeneficiary = await res.data
          if(OtpBeneficiary.code==="300"){
               dispatch({
                    type:GET_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
         
               dispatch({
                    type:GET_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
 }
}
 
 export const removeBeneficiary=(data, callback)=>async dispatch=>{
    try{
         const res =  axios.post(`${API_URL}/removeBeneficiary_V2_O`, data)
         let OtpBeneficiary = await res.data
          if(OtpBeneficiary.code===""){
               dispatch({
                    type:REMOVE_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
               callback();
               dispatch({
                    type:REMOVE_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
 }
 export const updateBeneficiary=(data, callback)=>async dispatch=>{
    try{
         const res =  axios.post(`${API_URL}/updateBeneficiary_V2_O`, data)
         let OtpBeneficiary = await res.data
          if(OtpBeneficiary.code===""){
               dispatch({
                    type:UPDATE_BENEFICIARY_FAIL,
                    payload:OtpBeneficiary
               })

          }else if(OtpBeneficiary.Data.code==="200"){
               callback();
               dispatch({
                    type:UPDATE_BENEFICIARY_SUCCESS,
                    payload:OtpBeneficiary.Data
               })
          }

    }catch(err){
         dispatch({
             type:CATACH_ERROR,
             payload:err
         })
         
         
    }
 }