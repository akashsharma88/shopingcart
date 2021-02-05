import { createSlice } from '@reduxjs/toolkit';
import { TAX_PERCENTAGE } from '../../utils';
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
        },
        clearCart: (state, { payload }) => {
            return [];
        }
    },
});

export const cartValue = productId => state => state.cart.find(v => v.productId === productId)?.quantity
export const cartCount = state => state?.cart?.length
export const allCartItems = state => state.cart
export const totalCartAmount = state => state.cart.map(({ salePrice, quantity = 0 }) => salePrice * quantity).reduce((t, s) => parseFloat(t + s).toFixed(2), 0)
export const productTotalCartAmount = state => state.cart.map(({ productPrice, quantity = 0 }) => productPrice * quantity).reduce((t, s) => parseFloat(t + s).toFixed(2), 0)
export const totalDiscountAmount = state => state.cart.map(({ salePrice, productPrice, quantity = 0 }) => (productPrice - salePrice) * quantity).reduce((t, s) => parseFloat(t + s).toFixed(2), 0)
export const taxAmount = state => state.cart.map(({ salePrice, quantity = 0 }) => (salePrice * quantity) * TAX_PERCENTAGE / 100).reduce((t, s) => parseFloat(t + s).toFixed(2), 0)

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
