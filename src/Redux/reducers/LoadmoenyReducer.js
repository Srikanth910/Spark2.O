import { GET_RAZORPAY_DETAILS_SUCCESS, GET_CARD_SUCCESS, ACCOUNT_BALANCE_RAZORPAY_SUCCESS, SESSION_MISSING } from "../constants/types";

const initialState = {
   accountDetails:{},
   
cardDetails:{},
BalanceDetail:{}
}

export default function (state = initialState, action) {
     switch(action.type){
         case GET_RAZORPAY_DETAILS_SUCCESS:
              return{
                   ...state,
                    accountDetails:action.payload
              }
               case GET_CARD_SUCCESS:
                    return{
                         cardDetails:action.payload
                    }

                     case ACCOUNT_BALANCE_RAZORPAY_SUCCESS:
                        case SESSION_MISSING:
                           return{
                                 ...state,
                                  BalanceDetail:action.payload
                           }
               default:
                    return state
     }
}