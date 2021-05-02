import { createSlice } from '@reduxjs/toolkit';
import data from '../data/currency.json';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        list: Object.keys(data.currencylist),
        from: "AUD",
        to: "CAD",
        rates: data.rates,
        srcValue: 1,
        result: 0,
        crossvia: data.crossvia
    },
    reducers: {
        fromUpdated: (state, action) => {
            console.log(action.payload);
            state.from = action.payload;
        },
        toUpdated: (state, action) => {
            console.log(action.payload);
            state.to = action.payload;
        },
        valueUpdated: (state, action) => {
            state.srcValue = action.payload;
        },
        resultUpdated: (state, action) => {
            state.result = action.payload;
            console.log(action.payload);
        }
    }
});

export const { resultUpdated, fromUpdated, toUpdated, valueUpdated } = currencySlice.actions;
export default currencySlice.reducer;