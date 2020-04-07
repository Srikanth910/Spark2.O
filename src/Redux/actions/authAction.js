import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAIL, GET_ERROR } from '../constants/types';
const API_URL='https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';


export const loginUser =(data, callback)=>dispatch=>{
 console.log('api',data)
    axios.post(`${API_URL}/loginByPasswordV2_O `,data)
    .then(res=>{
         console.log(res)
         
         if(res.data.Message==='SUCCESS'){
        dispatch({
             type:LOGIN_SUCCESS,
             payload:res.data

        })
        callback();

    }else{
        dispatch({
            type:LOGIN_FAIL,
            payload:res.data
        })
    }
    }).catch(err=>console.log(err))
         
    
}
 


// const Loginuser = (payload) => {
//     return async (dispatch) => {

//         try {
          
//           const response = await axios.post(`${API_URL}/loginByPasswordV2_O `,payload)

//           if(response.data.Message==='SUCCESS') {
//             dispatch({
//                 type: "GET_USER_SUCCESS",
//                 payload: response.dat
//             });
//             return response;
//           } else {
//             throw response;
//           }

//         } catch (error) {
//             dispatch({
//                 type: "LOGIN_USER_FAIL",
//                 payload: error.responseBody
//             });
//             return error;
//         }
//     }
// }