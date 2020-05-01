import { CREATE_OTP_BENEFICIARY_SUCCESS,
     RESEND_OTP_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_SUCCESS,
      GET_BENEFICIARY_SUCCESS, UPDATE_BENEFICIARY_SUCCESS, REMOVE_BENEFICIARY_SUCCESS, GET_MEMBER_DT_SUCCESS } from "../constants/types"

const initialState = {
    createBeneficiary: {},
    resendOtp: {},
    beneficiaryData: {},
    getBeneficiary: {},
    updateBeneficiary: {},
    removeBeneficiary: {},
    memberDetials:{},
    beneficiaryDetails:{}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_OTP_BENEFICIARY_SUCCESS:
            case RESEND_OTP_BENEFICIARY_SUCCESS:

            return {
                ...state,
                isLoading: true,
                createBeneficiary: action.payload
            }
        case RESEND_OTP_BENEFICIARY_SUCCESS:
            return {
                ...state,
                resendOtp: action.payload

            }
        case ADD_BENEFICIARY_SUCCESS:
            return {
                ...state,
                 beneficiaryDetails:action.payload

            }
        case GET_BENEFICIARY_SUCCESS:
            return {
                ...state,
                getBeneficiary:action.payload

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
                     ...state,
                     memberDetials:action.payload
                 }




        default:
            return state
    }



}