import { combineReducers } from 'redux';
 import auth from './authReducer'
import error from './errorReducer'
const rootReducer = combineReducers({
    auth:auth,
    error:error
});
export default rootReducer;
