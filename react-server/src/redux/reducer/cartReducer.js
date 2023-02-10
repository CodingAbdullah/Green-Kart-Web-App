import { createSlice } from '@reduxjs/toolkit';
import { names } from '../../utils/constants';

// Create an initial cart for default global state, import the names from a util directory
let initialCart = [];
let startingCost = 1.25;

for (var i = 0; i < names.length; i++){
    initialCart.push({ id: i + 1, name: names[i], quantity: 0, price: startingCost });
    startingCost += 0.25;
}

// Get cart if it exists
let cartStorage = localStorage.getItem('cart');

// Create a global piece of state which contains the current cart 
const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        shoppingCart: cartStorage !== null ? JSON.parse(localStorage.getItem('cart')) : initialCart
    },
    reducers : {
        resetCart : (state) => {
            // Reset? Set shopping cart state to initialCart
            state.shoppingCart = initialCart;
            
            // Set empty cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.shoppingCart));
       },
        updateCart : (state, action) => {
            state.shoppingCart = action.payload;

            // Set cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.shoppingCart));
       }
    }
});

// Export actions from cart reducer
export const { resetCart, updateCart } = cartSlice.actions;

// Export as default, the cart
let cartReducer = cartSlice.reducer;
export default cartReducer;