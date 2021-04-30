import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        list: [],
        from: "",
        to: "",
        result: 0,
    },
    reducers: {
        loadCurrency: (state, action) => {
            state.list = [...action.payload];
        },
        fromUpdated: (state, action) => {
            state.from = action.payload;
        },
        toUpdated: (state, action) => {
            state.to = action.payload;
        },
        convert: (state, action) => {
            console.log('We are converting');
        }
    }
});

export const { loadCurrency, fromUpdated, toUpdated, convert } = currencySlice.actions;
export default currencySlice.reducer;