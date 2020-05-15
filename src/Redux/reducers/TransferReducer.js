import {
  GET_BENECIARY_ACCOUNT,
  GET_ACTIVE_METHOD,
  GET_PAYOUT_STATUS_SUCCESS,
  TRANSACTION_WITHINCOOP_SUCCESS,
  CREATE_OTP_OUTSIDE_SUCCESS,
  TRANSACTION_WITHINCOOP_SPARK_SUCCESS,
} from '../constants/types';

const initialState = {
  getbackDetials: {},
  getActiveDetails: {},
  payoutDetails: {},
  otpOutsideDetails: {},
  withinSpark:{}
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
        return{
              ...state,
                withinSpark:action.payload
        }


    default:
      return state;
  }
}
