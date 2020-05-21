

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateMpin(data) {
  let errorsData = {};
 

  if (Validator.isEmpty(data.newMpin)) {
    errorsData.newMpin = 'This field is required';

    if(!Validator.isLength(data.newMpin,{min:6, max:6})){
      errorsData.newMpin= 'must be 6 digits'
    }
  }
  if (Validator.isEmpty(data.confirmMpin)) {
    errorsData.confirmMpin = 'This field is required';
  }

   if(!Validator.equals(data.newMpin, data.confirmMpin)){
    errorsData.confirmMpin = 'mpin do not match';
   }


  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}