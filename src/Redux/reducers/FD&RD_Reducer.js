import { GET_ACTIVE_FD_SUCCESS } from "../constants/types";

const initialState = {
   getactiveFD:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVE_FD_SUCCESS:
              return{
                   ...state,
                    getactiveFD:action.payload
              }
         


         default:
             return state
    }

}
