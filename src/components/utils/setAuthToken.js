import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const setAuthToken = token => {


  if (token) {
    

    (axios.defaults.headers.common['TOKEN'] = token),
      (axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'] = 'password'),
      (axios.defaults.headers.common['SPARK_KEY_PASSCODE'] = 'raghavaB9'),
      (axios.defaults.headers.common['SPARK_KEY_ID'] = '1421')
  } else {
    delete axios.defaults.headers.common['TOKEN'];
    // delete axios.defaults.headers.common['SPARK_KEY_ID'];
    // delete axios.defaults.headers.common['SPARK_KEY_PASSCODE'];

    // delete axios.defaults.headers.common['SPARK_KEY_PASSCODE_TYPE'];
  }
};
