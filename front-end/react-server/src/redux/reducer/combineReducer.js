import { combineReducers } from 'redux';
import { auth } from './authReducer';

const rootReducer = combineReducers({
    loginState: auth
});

export default rootReducer;