import { LOGIN_FAIL, GET_ERROR, MPIN_FAIL, LOGIN_SUCCESS, FORGOT_PASSWORD_FAIL, VALIDATE_OTP_FAIL , } from "../constants/types";

 

  const initialState={
      loginError:{},
      catchERROR:{},
      otpError:{}
  }
   

 export default  function(state=initialState, action){
     switch(action.type){
         case LOGIN_FAIL:
             case MPIN_FAIL:{
             return {
                 ...state,
                 loginError:action.payload
             }

         }
           case LOGIN_SUCCESS:
                return{
                    loginError:{}
                }
          case GET_ERROR:
              return{
                  ...state,
                  catchERROR:action.payload
              }
               case FORGOT_PASSWORD_FAIL:
                    return{
                        ...state,
                        loginError:action.payload

                    }
                     case VALIDATE_OTP_FAIL:
                         return{
                             ...state, 
                             otpError:action.payload
                         }
               
           default:
               return state
     }
 }