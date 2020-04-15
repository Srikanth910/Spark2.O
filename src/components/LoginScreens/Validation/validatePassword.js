

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validatePassword(data) {
  let errorsData = {};
 

  if (Validator.isEmpty(data.newPassword)) {
    errorsData.mpin = 'This field is required';
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errorsData.mpin = 'This field is required';
  }

   if(!Validator.equals(data.newPassword, data.confirmPassword)){
    errorsData.mpin = 'password must match';
   }

  

  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}