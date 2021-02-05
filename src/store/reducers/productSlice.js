import { createSlice } from '@reduxjs/toolkit';
const products = require('../../data/products.json')
export const productSlice = createSlice({
    name: 'product',
    initialState: products,
    reducers: {
        
    },
});

export const allProducts = state => state.product
export const getProductById = id => state => state.product.filter(v => v.productId ==id)[0]
export default productSlice.reducer;
