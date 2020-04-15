import { LOGIN_SUCCESS, MPIN_SUCCESS, FORGOT_PASS_OTP_SUCCESS, FORGOT_PASSWORD_SUCCESS, FORGET_MPIN_SUCCESS, VALIDATE_OTP_SUCCESS, FORGET_MPIN_OTP_SUCCESS, UPDATE_MPIN_SUCCESS, RESEND_OTP_SUCCESS } from "../constants/types";

const  initialState={
    userData:{},
    isLoading:false,
    isAutherticated:false,
    userMpin:{},
userotpdetails:{},
  Forgetuser:{},
  forgetMpin:{},
  verifyOtp:{},
   mpinOtp:{},
   updateMpin:{}
}

 export   default function(state=initialState, acton){
      switch(acton.type){
          case LOGIN_SUCCESS:
              case MPIN_SUCCESS:
              return{
                  ...state,
                  isLoading:true,
                  userMpin:acton.payload
              }

               
            
            case FORGOT_PASS_OTP_SUCCESS:
                case VALIDATE_OTP_SUCCESS:
                   
                  
                return{
                    ...state,
                    userotpdetails:acton.payload
                }
            
             case FORGOT_PASSWORD_SUCCESS:
                  return{
                       ...state,
                        Forgetuser:acton.payload
                  }
                  
             
                    case FORGET_MPIN_SUCCESS:
                         return{
                              ...state,
                              forgetMpin:acton.payload
                         };
                          case FORGET_MPIN_OTP_SUCCESS:
                             case RESEND_OTP_SUCCESS:
                               case VALIDATE_OTP_SUCCESS:
                             return{
                               ...state,
                                mpinOtp:acton.payload
                                
                             }

                              case UPDATE_MPIN_SUCCESS:
                                return{
                                  ...state,
                                  updateMpin:acton.payload
                                }
                        
              default:
        return state;
    }
      }

      
 
