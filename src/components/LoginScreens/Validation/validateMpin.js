

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateMpin(data) {
  let errorsData = {};
 

  if (Validator.isEmpty(data.newMpin)) {
    errorsData.newMpin = 'This field is required';
  }
  if (Validator.isEmpty(data.confirmMpin)) {
    errorsData.confirmMpin = 'This field is required';
  }

   if(!Validator.equals(data.newMpin, data.confirmMpin)){
    errorsData.confirmMpin = 'ppassword do not match';
   }


  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}