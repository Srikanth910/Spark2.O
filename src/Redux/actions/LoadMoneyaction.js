
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