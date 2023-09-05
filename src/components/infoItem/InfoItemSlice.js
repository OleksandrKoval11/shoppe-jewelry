import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItemId: 0
}

const InfoItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        fetchSelectedItem: (state, action) => {state.selectedItemId = action.payload}
    }
});

const {actions, reducer} = InfoItemSlice;

export default reducer;

export const {
    fetchSelectedItem
} = actions;