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
  ISFIN_BUS_RD_SUCCESS,
  GET_PREPAID_BILLER_SUCCESS,
  CREATE_OTP_EDITPROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  GET_TRANSACTION_SUCCESS,
  GET_PROFILE_SUCCUESS,
  STATEMENT_DATE_SUCCESS,
  GET_BANNERS_SUCCESS,
  SESSION_MISSING,
  GET_EULA_SUCCESS,
  GET_RD_URL,
  FD_CHART_URL_SUCCESS,
} from '../constants/types';
import {ActionSheet} from 'native-base';
// import { getPrepaidBillerCategories } from '../actions/authAction';

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
  signUpDetails: {},
  finbusDetails: {},
  getProfiledata: {},
  getPrepaidData: {},
  editProfileOtp: {},
  otpVerifyProfile: {},
  getTransactionList: {},
  STATEMENT_DATE_SUCCESS: {},
  sessionData:{},
  eulaurl:{},
  getRDchart:{},
  fdcharturl:{}
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
        isAutherticated:true,
        isLoading: false,
        userMpin: action.payload,
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signUpDetails: action.payload,
      };


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

    case ISFIN_BUS_RD_SUCCESS:
      return {
        ...state,
        finbusDetails: action.payload,
      };
    case GET_PROFILE_SUCCUESS:
      return {
        getProfiledata: action.payload,
      };
    case GET_PREPAID_BILLER_SUCCESS:
      return {
        getPrepaidData: action.payload,
      };
    case CREATE_OTP_EDITPROFILE_SUCCESS:
      return {
        ...state,
        editProfileOtp: action.payload,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        otpVerifyProfile: action.payload,
      };

    case GET_TRANSACTION_SUCCESS:
      return {
        ...state,
        getTransactionList: action.payload,
      };
    case STATEMENT_DATE_SUCCESS:
      return {
        ...state,
        getStatement: action.payload,
      };

       case GET_BANNERS_SUCCESS:
          return{
             ...state,
              banners:action.payload
          }
          case SESSION_MISSING:
            return{
              sessionData:action.payload
            }

            case GET_EULA_SUCCESS:
               return{
                  ...state,
                   eulaurl:action.payload
               }
                case GET_RD_URL:
                  return{
                    ...state,
                    getRDchart:action.payload
                  }

                  case FD_CHART_URL_SUCCESS:
                     return{
                        ...state, 
                         fdcharturl:action.payload
                     }
    default:
      return state;
  }
}
