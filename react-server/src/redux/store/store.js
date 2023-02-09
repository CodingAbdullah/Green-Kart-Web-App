import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import cartReducer from '../reducer/cartReducer';

const store = configureStore({
    reducer : {
        auth: authReducer,
        cart: cartReducer

    }
});

export default store;