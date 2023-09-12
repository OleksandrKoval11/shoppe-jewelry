import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: '',
    filterShopBy: 'default',
    filterSortBy: 'default',
    minValue: 0,
    maxValue: 0,
    maxPrice: 0,
    minPrice: 0,
    sliderMinValue: 0,
    sliderMaxValue: 0
}


const JewelryFilterBarSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateTerm: (state, action) => {state.term = action.payload},
        setfilterShopBy: (state, action) => {state.filterShopBy = action.payload},
        setfilterSortBy: (state, action) => {state.filterSortBy = action.payload},
        setMinValue: (state, action) => {state.minValue = action.payload},
        setMaxValue: (state, action) => {state.maxValue = action.payload},
        setMaxPrice: (state, action) => {state.maxPrice = action.payload},
        setMinPrice: (state, action) => {state.minPrice = action.payload},
        setSliderMinValue: (state, action) => {state.sliderMinValue = action.payload},
        setSliderMaxValue: (state, action) => {state.sliderMaxValue = action.payload}
        
    }
});

const {actions, reducer} = JewelryFilterBarSlice;

export default reducer;

export const {
    updateTerm,
    setfilterShopBy,
    setfilterSortBy,
    setMinValue,
    setMaxValue,
    setMaxPrice,
    setMinPrice,
    setSliderMinValue,
    setSliderMaxValue
} = actions;