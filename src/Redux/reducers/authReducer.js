import { LOGIN_SUCCESS } from "../constants/types";

const  initialState={
    userData:{},
    isLoading:false,
    isAutherticated:false
}

 export   default function(state=initialState, acton){
      switch(acton.type){
          case LOGIN_SUCCESS:
              return{
                  ...state,
                  isLoading:true,
                  userData:acton.payload
              }
             
              default:
        return state;
    }
      }

      
 
