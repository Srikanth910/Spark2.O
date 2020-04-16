

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validatePassword(data) {
  let errorsData = {};
 

  if (Validator.isEmpty(data.newPassword)) {
    errorsData.newPassword = 'This field is required';
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errorsData.confirmPassword = 'This field is required';
  }

   if(!Validator.equals(data.newPassword, data.confirmPassword)){
    errorsData.confirmPassword = 'ppassword do not match';
   }

  

  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}