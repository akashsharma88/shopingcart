import { createSlice } from '@reduxjs/toolkit';
const products = require('../../data/products.json')
export const filterSlice = createSlice({
    name: 'filter',
    initialState: { brand: [], category: [] },
    reducers: {
        addBrand: (state, { payload }) => { state.brand.push(payload) },
        removeFromBrand: (state, { payload }) => {
            return { ...state, brand: state.brand.filter(s => s !== payload) }
        },
        addCategory: (state, { payload }) => { state.category.push(payload) },
        removeFromCategory: (state, { payload }) => {
            return { ...state, category: state.category.filter(s => s !== payload) }
        },
        clearFilter: (state, { payload }) => state = { brand: [], category: [] }
    },
});

export const selectedBrand = state => state.filter.brand
export const selectedCategory = state => state.filter.category
export const { addBrand, addCategory, removeFromBrand, removeFromCategory, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
