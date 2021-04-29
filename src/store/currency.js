import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'currency',
    initialState: [],
    reducers: {
        addCurrency: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addCurrency } = slice.actions;
export default slice.reducer;