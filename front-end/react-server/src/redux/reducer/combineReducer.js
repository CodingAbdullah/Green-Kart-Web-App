import { combineReducers } from 'redux';
import registerAuthReducer from './registerAuthReducer';
import loginAuthReducer from './loginAuthReducer';

const rootReducer = combineReducers({
    registerAuthReducer,
    loginAuthReducer
});

export default rootReducer;