import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../Redux/reducers'

let store = createStore(rootReducer,applyMiddleware(thunk))

export default store;