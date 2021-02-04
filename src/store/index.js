import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from './reducers/cartSlice'
import productReducer from './reducers/productSlice'
import filterReducer from './reducers/filterSlice'
export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        cart: cartReducer,
        filter: filterReducer
    }
});
