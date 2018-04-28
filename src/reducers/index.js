import {combineReducers} from 'redux';
import loginReducer from './reducer-login';
import productReducer from './reducer-products';

const rootReducer=combineReducers({
    auth:loginReducer,
    products:productReducer

});
export default rootReducer;