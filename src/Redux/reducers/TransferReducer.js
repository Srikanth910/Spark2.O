import { GET_BENECIARY_ACCOUNT } from "../constants/types"

const initialState = {
     getbackDetials:{}
   
}

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_BENECIARY_ACCOUNT:
         return{
              ...state,
                getbackDetials:action.payload
         }



         default :
         return state
    }

    }