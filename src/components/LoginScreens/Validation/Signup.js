import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateSignup(data) {
  let errorsLogin = {};
 
  if (Validator.isEmpty(data.MobileNO)) {
    errorsLogin.MobileNO = 'This field is required';
  }
 
  if(!Validator.matches(data.MobileNO,/^[0-9]{10}$/)){
     errorsLogin.MobileNO='please enter 10 digits numbers'
   }
 
  if (Validator.isEmpty(data.Email)) {
    errorsLogin.Email = 'This field is required';
  }

   

  return {
    errorsLogin,
    isValid:isEmpty(errorsLogin)
  }
}