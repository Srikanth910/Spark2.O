import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
 const middleware=[thunk]
import rootReducer from '../Redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
  const initialState={}
let store = createStore(rootReducer)
 
    
export default store;
