import { createSlice } from '@reduxjs/toolkit';
const products = require('../../data/products.json')
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, { payload }) => { state.push({ ...payload, quantity: 1 }) },
        removeFromCart: (state, { payload }) => state.filter(s => s.productId !== payload),
        updateQuantity: (state, { payload }) => {
            if (!payload.qty)
                return state.filter(s => s.productId !== payload.productId)
            else
                state.find(s => s.productId === payload.productId).quantity = payload.qty
        }
    },
});
export const cartValue = productId => state => state.cart.find(v => v.productId === productId)?.quantity
export const cartCount = state => state?.cart?.length
export const allCartItems = state => state.cart
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
