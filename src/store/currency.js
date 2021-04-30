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

        },
        toUpdated: (state, action) => {

        },
        convert: (state, action) => {

        }
    }
});

export const { loadCurrency, fromUpdated, toUpdated, convert } = currencySlice.actions;
export default currencySlice.reducer;