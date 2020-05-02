import { combineReducers } from 'redux';
 import auth from './authReducer'
import error from './errorReducer'
 import beneficiary from './beneficiaryReducer'
const rootReducer = combineReducers({
    auth:auth,
    error:error,
    beneficiary:beneficiary
});
export default rootReducer;
