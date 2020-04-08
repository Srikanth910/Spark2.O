import { LOGIN_SUCCESS, MPIN_SUCCESS } from "../constants/types";

const  initialState={
    userData:{},
    isLoading:false,
    isAutherticated:false,
    userMpin:{}
}

 export   default function(state=initialState, acton){
      switch(acton.type){
          case LOGIN_SUCCESS:
              return{
                  ...state,
                  isLoading:true,
                  userData:acton.payload
              }

               case MPIN_SUCCESS:
                   return{
                       ...state,
                       userMpin:acton.payload
                   }
             
              default:
        return state;
    }
      }

      
 
