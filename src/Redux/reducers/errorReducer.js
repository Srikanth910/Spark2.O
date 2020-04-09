import { LOGIN_FAIL, GET_ERROR, MPIN_FAIL , } from "../constants/types";

 

  const initialState={
      loginError:{},
      catchERROR:{}
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

          case GET_ERROR:
              return{
                  ...state,
                  catchERROR:action.payload
              }
           default:
               return state
     }
 }