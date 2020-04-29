import { CREATE_OTP_BENEFICIARY_SUCCESS,
     RESEND_OTP_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_SUCCESS,
      GET_BENEFICIARY_SUCCESS, UPDATE_BENEFICIARY_SUCCESS, REMOVE_BENEFICIARY_SUCCESS, GET_MEMBER_DT_SUCCESS } from "../constants/types"

const initialState = {
    createBeneficiary: {},
    resendOtp: {},
    beneficiaryData: {},
    getBeneficiary: [],
    updateBeneficiary: {},
    removeBeneficiary: {},
    memberDetial:{}
}

export default function (state = initialState, acton) {
    switch (acton.type) {
        case CREATE_OTP_BENEFICIARY_SUCCESS:

            return {
                ...state,
                isLoading: true,
                createBeneficiary: acton.payload
            }
        case RESEND_OTP_BENEFICIARY_SUCCESS:
            return {
                ...state,
                resendOtp: acton.payload

            }
        case ADD_BENEFICIARY_SUCCESS:
            return {
                ...state,

            }
        case GET_BENEFICIARY_SUCCESS:
            return {
                ...state,
                getBeneficiary: acton.payload

            }
        case UPDATE_BENEFICIARY_SUCCESS:
            return {
                ...state,
                updateBeneficiary: acton.payload
            }
        case REMOVE_BENEFICIARY_SUCCESS:
            return {
                ...state,
                removeBeneficiary: acton.payload
            }      
             case GET_MEMBER_DT_SUCCESS:
                 return{
                     memberDetial:action.payload
                 }




        default:
            return state
    }



}