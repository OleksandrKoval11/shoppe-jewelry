import { configureStore } from '@reduxjs/toolkit';
import goods from '../components/jewelryCatalogs/JewelryCatalogsSlice';
import filters from '../components/jewelryFilterBar/JewelryFilterBarSlice';
import notification from '../components/notification/NotificationSlice';
import item from '../components/selectedItem/SelectedItemSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {goods, filters, notification, item},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;