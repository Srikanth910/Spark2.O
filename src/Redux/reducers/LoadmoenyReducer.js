import { GET_RAZORPAY_DETAILS_SUCCESS, GET_CARD_SUCCESS } from "../constants/types";

const initialState = {
   accountDetails:{},
   
cardDetails:{}
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
               default:
                    return state
     }
}