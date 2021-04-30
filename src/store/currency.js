import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        amount: []
    },
    reducers: {
        addCurrency: (state, action) => {
            console.log(state, action);
            state.amount = [...state.amount, action.payload];
        }
    }
});

export const { addCurrency } = currencySlice.actions;
export default currencySlice.reducer;