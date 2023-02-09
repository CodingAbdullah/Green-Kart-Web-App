import { createSlice } from '@reduxjs/toolkit';

// Get cart if it exists
let cartStorage = localStorage.getItem('cart');

// Create a global piece of state which contains the current cart 
const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        shoppingCart: cartStorage ? JSON.parse(localStorage.getItem('cart')) : []
    },
    reducers : {
        reset : (state) => {
            state.shoppingCart = [];
            
            // Set empty cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.shoppingCart));
       },
        addItem : (state, action) => {
            let newCart = state.shoppingCart;
            newCart.push(action.payload.item);
            state.shoppingCart = newCart;

            // Set cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.shoppingCart));
       }
    }
});

// Export actions from cart reducer
export const { reset, addItem } = cartSlice.actions;

// Export as default, the cart
let cartReducer = cartSlice.reducer;
export default cartReducer;