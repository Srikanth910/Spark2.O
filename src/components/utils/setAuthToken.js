import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { getUserData } from '../DataAccess/GetData';


export const setAuthToken = (token,memberid,password) => {
  


    if(token){
    
    axios.defaults.headers.common['TOKEN'] =token ,
      axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'] = 'PASSWORD',
      axios.defaults.headers.common['SPARK_KEY_PASSCODE'] = password, 
      axios.defaults.headers.common['SPARK_KEY_ID'] = memberid

    }
  
};
  