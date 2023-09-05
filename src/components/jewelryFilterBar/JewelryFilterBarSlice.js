import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: ''
}


const JewelryFilterBarSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateTerm: (state, action) => {state.term = action.payload}
    }
});

const {actions, reducer} = JewelryFilterBarSlice;

export default reducer;

export const {
    updateTerm
} = actions;