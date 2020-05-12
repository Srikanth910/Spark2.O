 import axios from 'axios';
   export const setAuthToken = token=>{
       
        if(token){
          console.log("token",token)
              
             axios.defaults.headers.common['TOKEN']=token,
             axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'] = 'password',
             axios.defaults.headers.common['SPARK_KEY_PASSCODE'] = 'raghavaB9',
             axios.defaults.headers.common['SPARK_KEY_ID'] = '1421'
             
        }else{
            delete axios.defaults.headers.common['TOKEN']
        }
   }