import { combineReducers } from 'redux';
 import auth from './authReducer'
import error from './errorReducer'
 import beneficiary from './beneficiaryReducer'
  import loadmoneyDetails from '../reducers/LoadmoenyReducer'
const rootReducer = combineReducers({
    auth:auth,
    error:error,
    beneficiary:beneficiary,
     loadmoney:loadmoneyDetails
});
export default rootReducer;
