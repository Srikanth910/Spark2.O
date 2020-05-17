import {
  GET_BENECIARY_ACCOUNT,
  GET_ACTIVE_METHOD,
  GET_PAYOUT_STATUS_SUCCESS,
  TRANSACTION_WITHINCOOP_SUCCESS,
  CREATE_OTP_OUTSIDE_SUCCESS,
  TRANSACTION_WITHINCOOP_SPARK_SUCCESS,
  CREATE_OTP_BUSINESS_SUCCESS,
  TRANSACTION_WITHINCOOP_SPARK_FAIL,
  CREATE_SCHEDULE_SUCCESS,
  CREATE_OTP_SCHEDULE_SUCCESS,
  RESEND_OTP_SCHEDULE_SUCCESS,

} from '../constants/types';

const initialState = {
  getbackDetials: {},
  getActiveDetails: {},
  payoutDetails: {},
  otpOutsideDetails: {},
  withinSpark:{},
  sparkOtp:{},
  sparkPedding:{},
  scheduleDetails:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BENECIARY_ACCOUNT:
      return {
        ...state,
        getbackDetials: action.payload,
      };
    case GET_ACTIVE_METHOD:
      return {
        ...state,
        getActiveDetails: action.payload,
      };

    case GET_PAYOUT_STATUS_SUCCESS:
      return {
        ...state,
        payoutDetails: action.payload,
      };
    case TRANSACTION_WITHINCOOP_SUCCESS:
      return {
        ...state,
        withinCoopDetail: action.payload,
      };

    case CREATE_OTP_OUTSIDE_SUCCESS:
      return {
        ...state,
        otpOutsideDetails: action.payload,
      };
       case TRANSACTION_WITHINCOOP_SPARK_SUCCESS:
        case TRANSACTION_WITHINCOOP_SPARK_FAIL:
        return{
              ...state,
                withinSpark:action.payload
        }
         case CREATE_OTP_BUSINESS_SUCCESS
         :
               return{
                     ...state,
                      sparkOtp:action.payload
               }
              
                case CREATE_SCHEDULE_SUCCESS:
                   return{
                      ...state,
                       scheduleDetails:action.payload
                   }

                    case CREATE_OTP_SCHEDULE_SUCCESS:
                       case RESEND_OTP_SCHEDULE_SUCCESS:
                      return{
                         ...state, 
                          otpSchedule:action.payload
                      }

    default:
      return state;
  }
}
