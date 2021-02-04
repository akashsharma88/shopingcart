import brands from '../data/brands.json';
import category from '../data/category.json';
import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { addBrand, addCategory, removeFromBrand, removeFromCategory, selectedBrand, selectedCategory } from '../store/reducers/filterSlice';

export const Filters = () => {
    const dispatch = useDispatch();
    const selectBrand = useSelector(selectedBrand)
    const selectCategory = useSelector(selectedCategory)
    // const [state, setState] = useState({
    //     brand: [],
    //     category: []
    // });
    // useEffect(() => {
    //     if (state.brand || state.category)
    //         dispatch(filterProduct(state))
    // }, [state])
    // const handleChange = val => (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked ? [...state[event.target.name], val] : state[event.target.name].filter(v => v !== val) });
    // };
    const _handleBrandChange = val => e => {
        if (e.target.checked)
            dispatch(addBrand(val))
        else
            dispatch(removeFromBrand(val))
    }

    const _handleCategoryChange = val => e => {
        if (e.target.checked)
            dispatch(addCategory(val))
        else
            dispatch(removeFromCategory(val))
    }
    return (
        <div>
            <Typography>BRANDS</Typography>
            {brands.map((v, i) => <FormControlLabel
                key={`brands-${i}`}
                control={
                    <Checkbox
                        checked={selectBrand.includes(v)}
                        onChange={_handleBrandChange(v)}
                        name="brand"
                        color="primary"
                    />
                }
                label={v}
            />)}
            <Typography>CATEGORY</Typography>
            {category.map((v, i) => <FormControlLabel
                key={`category-${i}`}
                control={
                    <Checkbox
                        checked={selectCategory.includes(v)}
                        onChange={_handleCategoryChange(v)}
                        name="category"
                        color="primary"
                    />
                }
                label={v}
            />)}
        </div>
    )
}
