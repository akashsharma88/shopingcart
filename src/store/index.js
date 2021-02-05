import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice'
import productReducer from './reducers/productSlice'
import filterReducer from './reducers/filterSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],

};
const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer
})
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store)

