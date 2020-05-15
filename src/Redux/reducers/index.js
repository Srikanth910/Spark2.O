import { combineReducers } from 'redux';
 import auth from './authReducer'
import error from './errorReducer'
 import beneficiary from './beneficiaryReducer'
  import loadmoneyDetails from '../reducers/LoadmoenyReducer'
   import transferDetails from '../reducers/TransferReducer'
    import  BIllcatagory from '../reducers/BillpayReducer'
     import fdDetails from '../reducers/FD&RD_Reducer'
     
const rootReducer = combineReducers({
    auth:auth,
    error:error,
    beneficiary:beneficiary,
     loadmoney:loadmoneyDetails,
     transferDetails:transferDetails,
      BIllcatagoryDetails:BIllcatagory,
       FDRDcreation:fdDetails

    
});
export default rootReducer;
