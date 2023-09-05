import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    goods: [],
    goodsLoadingStatus: 'idle',
    orderedGoods: [],
    orderedCounters: [],
    selectedItemId: 0
}

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/goods");
    }
);

const JewelryCatalogsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        addedGoods: (state, action) => {
            const itemIdToAdd = action.payload;
            const itemExistsInOrderedGoods = state.orderedGoods.some(item => item.id === itemIdToAdd);

            if (!itemExistsInOrderedGoods) {
                const newItem = state.goods.find(item => item.id === itemIdToAdd);
                if (newItem) {
                    state.orderedGoods.push(newItem);
                }
            }
        },
        removeGoods: (state, action) => {
            const itemIdToRemove = action.payload;
            state.orderedGoods = state.orderedGoods.filter(item => item.id !== itemIdToRemove);
        },
        changeCounters: (state, action) => {
            state.orderedCounters = action.payload;
        },
        fetchSelectedItem: (state, action) => {state.selectedItemId = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGoods.pending, state => {state.goodsLoadingStatus = 'loading'})
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.goodsLoadingStatus = 'idle';
                state.goods = action.payload;
            })
            .addCase(fetchGoods.rejected, state => {state.goodsLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = JewelryCatalogsSlice;

export default reducer;

export const {
    goodsFetching,
    goodsFetched,
    goodsFetchingError,
    addedGoods,
    removeGoods,
    changeCounters,
    fetchSelectedItem
} = actions;