import {CATAGORY_RECENT_TXNS_SUCCESS, GET_CUSTMER_DETAILS_SUCCESS, CONENIENCE_FEES_SUCCESS, SEND_BILL_FETCH_SUCCESS, OTP_BILL_PAYMENT_SUCCESS, GET_PROMO_CODE_SUCCESS} from '../constants/types';

const initialState = {
  catagoryDetails: {},
   getCutmerDetails:{},
   convenienceFees:{},
   billFetchDetails:{},
   otpDetails:{},
   promocodeDetails:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATAGORY_RECENT_TXNS_SUCCESS:
      return {
        ...state,
        catagoryDetails: action.payload,
      };

       case GET_CUSTMER_DETAILS_SUCCESS:
            return{
                 ...state,
                  getCutmerDetails:action.payload
            }

             case CONENIENCE_FEES_SUCCESS:
                  return{
                      ...state,
                       convenienceFees:action.payload
                  }
                

          case  SEND_BILL_FETCH_SUCCESS:
               return{
                    ...state,
                     billFetchDetails:action.payload
               }

         case OTP_BILL_PAYMENT_SUCCESS:
              return{
                   ...state,
                   otpDetails:action.payload
              }
               case GET_PROMO_CODE_SUCCESS:
                    return{
                         ...state,
                          promocodeDetails:action.payload
                    }
                

    default:
      return {
           ...state
      };
  }
}
