import axios from 'axios';
import { GET_ACTIVE_METHOD, CATACH_ERROR, GET_BENECIARY_ACCOUNT } from '../constants/types';

const API_URL = 'https://sandboxapp.assccl.com:8443/vk-syndicateIOS/rest';



 export  const  getactiveSuccess=(getMethods)=>{
      console.log('data coming ' , getMethods)
      return{
           type:GET_ACTIVE_METHOD,
         getMethods
      }


 }
  
export const getActivemethods=()=>{
 return  async dispatch=>{
       try{
      const res = await axios.get(`${API_URL}/getActivemethod `,)
      let getMethods = await res.data
       console.log('res',getMethods)
       if(getMethods.code==="200"){
            // dispatch({
            //      type: GET_ACTIVE_METHOD,
            //      payload:getMethods
            // })

              dispatch(getactiveSuccess(getActivemethods))
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

//   TO my bank account



export const getBeneficiaryBank=(data)=>{
     console.log(data)

    
return  async dispatch=>{
     try{
        const res = await axios.get(`${API_URL}/getBeneficiaryV_1_3_5`,{
            params:{
        memberId:data.memberId,
        isPrimaryAccunt:data.isPrimaryAccunt,
        isWithInCoop:data.isWithInCoop,
        type:data.type
            }

        }
            ,)
       
    // const res = await axios.get(`${API_URL}/getBeneficiaryV_1_3_5?memberId=${data.memberId}
    // &isPrimaryAccunt=${data.isPrimaryAccunt} &isWithInCoop=${data.isWithInCoop}&type=${data.type}`,)
    let bankDetails = await res.data
     console.log('res',bankDetails)
     if(bankDetails.code==="200"){
          dispatch({
               type: GET_BENECIARY_ACCOUNT,
               payload:getMethods
          })
           
     }
}catch(err){
     console.log('errorres',err)
    dispatch({
        type:CATACH_ERROR,
        payload:err
    })
    
    
}
}
}
 

 