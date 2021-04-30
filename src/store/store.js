import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import currencyReducer from './currency';

export default configureStore({
    reducer: {
        currency: currencyReducer
    }
});