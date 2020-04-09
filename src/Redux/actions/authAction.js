import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAIL, GET_ERROR,MPIN_SUCCESS, MPIN_FAIL } from '../constants/types';
const API_URL='https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';


export const loginUser =(data, callback)=>dispatch=>{
 console.log('api',data)
    axios.post(`${API_URL}/loginByPasswordV2_O `,data)
    .then(res=>{
         console.log('res',res)

         if(res.data.Data.Message==='SUCCESS'){
        dispatch({
             type:LOGIN_SUCCESS,
             payload:res.data.Data

        })
        callback();

    }else{
        dispatch({
            type:LOGIN_FAIL,
            payload:res.data
        })
    }

    }).catch(err=>{
        dispatch({
            type:GET_ERROR,
            payload:err
        })
    })
         
    
}


 export  const userMpin=(data ,callback)=>dispatch=>{
     console.log(data)
     axios.post(`${API_URL}/ loginByMpinV2_O`,data)
     .then(res=>{
          console.log(res.data)
          if(res.data.Data.code==='200'){
               console.log('api',res.data.Data)
              dispatch({
                  type:MPIN_SUCCESS,
                  payload:res.data
              })
               callback();
          }else{
               dispatch({
                   type:MPIN_FAIL,
                   payload:res.data
               })
          }
     }).catch(err=>console.log('error',err))
 }
 

