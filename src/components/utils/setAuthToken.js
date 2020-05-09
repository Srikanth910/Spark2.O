 import axios from 'axios';
   const setAuthToken= token=>{
        if(token){
              
             axios.defaults.headers.common['TOKEN']=token,
             axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'] = 'value',
             axios.defaults.headers.common['SPARK_KEY_PASSCODE'] = 'value',
             axios.defaults.headers.common['SPARK_KEY_ID'] = 'value'
             
        }else{
            delete axios.defaults.headers.common['Authorization']
        }
   }