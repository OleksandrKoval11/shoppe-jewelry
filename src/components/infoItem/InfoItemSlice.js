import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItemId: [],
    filter: 'descr'
}

const InfoItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        fetchSelectedItem: (state, action) => {
            state.selectedItemId = { Id: action.payload, counter: 1};
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
        }
    }    
});

const {actions, reducer} = InfoItemSlice;

export default reducer;

export const {
    fetchSelectedItem,
    counterPlus,
    counterMinus,
    changeFilter
} = actions;