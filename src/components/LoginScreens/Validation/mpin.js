import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateLogin(data) {
  let errorsData = {};
 
  if (Validator.isEmpty(data.mpin)) {
    errorsData.mpin = 'This field is required';
  }

 

  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}