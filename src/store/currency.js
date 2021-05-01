import { createSlice } from '@reduxjs/toolkit';
import data from '../data/currency.json';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        list: Object.keys(data.currencylist),
        from: "AUD",
        to: "CAD",
        result: 0,
        crossvia: data.crossvia
    },
    reducers: {
        fromUpdated: (state, action) => {
            state.from = action.payload;
        },
        toUpdated: (state, action) => {
            state.to = action.payload;
        },
        convert: (state, action) => {
            console.log('We are converting');
        },
        resultUpdated: (state, action) => {
            state.result = action.payload;
        }
    }
});

export const { resultUpdated, fromUpdated, toUpdated, convert } = currencySlice.actions;
export default currencySlice.reducer;