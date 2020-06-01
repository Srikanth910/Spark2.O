import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validatemPin(data) {
  let errorsData = {};
 

  if (Validator.isEmpty(data.mpin)) {
    errorsData.mpin = 'This field is required';
  }

   if(!Validator.isLength(data.mpin,{min:6, max:6})){
     errorsData.mpin= 'must be 6 digits'
   }
  //  if(!Validator.matches(data.mpin,/^[0-9]$/)){
  //   errorsData.mpin='please enter 10 digits numbers'
  // }

  return {
    errorsData,
    isValid:isEmpty (errorsData)
  }
}