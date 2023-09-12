import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItemId: [],
    filter: 'descr',
    type: ''
}

const SelectedItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        fetchSelectedItem: (state, action) => {
            state.selectedItemId = { ...action.payload, counter: 1};
        },
        counterPlus: (state) => {
            if (state.selectedItemId) {
                state.selectedItemId.counter += 1;
            }
        },
        counterMinus: (state) => {
            if (state.selectedItemId) {
                state.selectedItemId.counter -= 1;
            }
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
        getTypeOfItem: (state, action) => {state.type = action.payload}
    }    
});

const {actions, reducer} = SelectedItemSlice;

export default reducer;

export const {
    fetchSelectedItem,
    counterPlus,
    counterMinus,
    changeFilter,
    getTypeOfItem
} = actions;