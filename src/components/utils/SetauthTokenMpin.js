import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {getUserData} from '../DataAccess/GetData';

export const SetauthtokenMpin = (token, memberid, mPin) => {
   console.log(token, memberid, mPin)
  if (token) {
    (axios.defaults.headers.common['TOKEN'] = token),
      (axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'] = 'MPIN'),
      (axios.defaults.headers.common['SPARK_KEY_PASSCODE'] = mPin),
      (axios.defaults.headers.common['SPARK_KEY_ID'] = memberid);
  }
};
