import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import rootReducer from '../reducer/combineReducer';

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;