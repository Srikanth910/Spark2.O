import { GET_ACTIVE_FD_SUCCESS, ACTIVE_RD_SUCCESS, CREATE_OTP_RD_SUCCESS, RESEND_OTP_RD_SUCCESS } from "../constants/types";

const initialState = {
   getactiveFD:{},
   getactiveRd:{},
   
createRd:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVE_FD_SUCCESS:
              return{
                   ...state,
                    getactiveFD:action.payload
              }
        
               case ACTIVE_RD_SUCCESS:
                    return{
                         ...state,
                          getactiveRd:action.payload
                    }
                    case CREATE_OTP_RD_SUCCESS:
                        case RESEND_OTP_RD_SUCCESS:
                         return{
                              ...state,
                               createRd:action.payload
                         }



         default:
             return state
    }

}
