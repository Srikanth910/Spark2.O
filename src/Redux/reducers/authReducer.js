import {
  LOGIN_SUCCESS,
  MPIN_SUCCESS,
  FORGOT_PASS_OTP_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGET_MPIN_SUCCESS,
  VALIDATE_OTP_SUCCESS,
  FORGET_MPIN_OTP_SUCCESS,
  UPDATE_MPIN_SUCCESS,
  RESEND_OTP_SUCCESS,
  DEVICEID_OTP,
  MPIN_LOADING,
  DEVICE_CHECK_OTP_SUCCESS,
  DEVICE_CHECK_OTP_FAIL,
  SIGNUP_USER_SUCCESS,
  SIGNUP_CHECK_OTP_SUCCESS,
  CREATE_MEMBAR_TOKEN_SUCCESS,
} from '../constants/types';
import {ActionSheet} from 'native-base';

const initialState = {
  userData: {},
  isLoading: false,
  isAutherticated: false,
  userMpin: {},
  userotpdetails: {},
  Forgetuser: {},
  forgetMpin: {},
  verifyOtp: {},
  mpinOtp: {},
  updateMpin: {},
  DeviceOtp: {},
  signUpotp: {},
   signUpDetails:{}
   
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MPIN_LOADING:
      return {
        isLoading: true,
      };
    case LOGIN_SUCCESS:
    case MPIN_SUCCESS:
    case DEVICE_CHECK_OTP_SUCCESS:
    case CREATE_MEMBAR_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userMpin: action.payload,
      };


       case SIGNUP_USER_SUCCESS:
          return{
            ...state ,
            signUpDetails:action.payload
          }
    case DEVICEID_OTP:
      return {
        ...state,
        DeviceOtp: action.payload,
      };

    case SIGNUP_CHECK_OTP_SUCCESS:
      return {
        ...state,
        signUpotp: action.payload,
      };

    case FORGOT_PASS_OTP_SUCCESS:
    case VALIDATE_OTP_SUCCESS:
      return {
        ...state,
        userotpdetails: action.payload,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        Forgetuser: action.payload,
      };

    case FORGET_MPIN_SUCCESS:
      return {
        ...state,
        forgetMpin: action.payload,
      };
    case FORGET_MPIN_OTP_SUCCESS:
    case RESEND_OTP_SUCCESS:
    case VALIDATE_OTP_SUCCESS:
      return {
        ...state,
        mpinOtp: action.payload,
      };
    case UPDATE_MPIN_SUCCESS:
      return {
        ...state,
        updateMpin: action.payload,
      };

    default:
      return state;
  }
}
