
import axios from 'axios';
import { GET_RAZORPAY_DETAILS_SUCCESS, GET_RAZORPAY_DETAILS_FAIL, CATACH_ERROR, GET_CARD_SUCCESS } from '../constants/types';
const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';






export const getRazorpayDetails=(data)=>{
    console.log(data)
 return  async dispatch=>{
       try{
      const res = await axios.get(`${API_URL}/getRazorpayVADetails?memberId=${data.memberId}&isFirsttime=false `, )
      let accountDetails = await res.data
       console.log('res',accountDetails)
       if(accountDetails.code==="200"){
            dispatch({
                 type:GET_RAZORPAY_DETAILS_SUCCESS,
                 payload:accountDetails
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



export const addSavingsAccountBalanceRazorpay = data => {
     console.log('uires',data);
     return async dispatch => {
       try {
         const res = await axios.get(
           `${API_URL}/addSavingsAccountBalanceRazorpay?membarId=${data.membarId}&balance=${data.balance}&chargeAmount=0.0&isServiceChargePayedByCust=no&isShareBuy=false&pgTransId=${data.pgTransId}`)
            
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
 








export const checkCarddetails=(data)=>{
    
 return  async dispatch=>{
       try{
      const res = await axios.get(`${API_URL}/pgServerCheck5 `)
      let RazpoyDetails = await res.data
       console.log('res',RazpoyDetails)
       if(RazpoyDetails.code==="200"){
            dispatch({
                 type:GET_CARD_SUCCESS,
                 payload:RazpoyDetails.chrgeslist
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