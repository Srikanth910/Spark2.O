import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateSignup(data) {
  let errorsLogin = {};
 
  if (Validator.isEmpty(data.mobile)) {
    errorsLogin.mobile = 'This field is required';
  }
  // if (Validator.isEmpty(data.selected2)) {
  //   errorsLogin.selected2 = 'This field is required';
  // }
  // if(!Validator.isLength(data.mobile,{min:1, max:10})){
  //   errorsLogin.mobile='Must be 10 digits'
  // }
  if(!Validator.matches(data.mobile,/^[0-9]{10}$/)){
     errorsLogin.mobile='please enter 10 digits numbers'
   }

  if (Validator.isEmpty(data.password)) {
    errorsLogin.password = 'This field is required';
  }

   

  return {
    errorsLogin,
    isValid:isEmpty (errorsLogin)
  }
}