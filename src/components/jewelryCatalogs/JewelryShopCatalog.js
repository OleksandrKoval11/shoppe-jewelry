import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import { fetchGoods, addedGoods, plusCounter } from './JewelryCatalogsSlice';
import { showNotification } from '../notification/NotificationSlice';

import JewelryShopItem from '../JewelryItems/JewelryShopItem';
import './jewelryCatalogs.scss';
import Spiner from '../spinner/Spinner';

const JewelryShopCatalog = () => {
    const filteredGoodsSelector = createSelector(
        (state) => state.goods.goods,
        (state) => state.filters.term,
        (state) => state.filters.minValue,
        (state) => state.filters.maxValue,
        (goods, term, minValue, maxValue) => {
            return goods.filter(item => {
                const lowerCaseName = item.name.toLowerCase();
                const nameIncludesTerm = lowerCaseName.includes(term.toLowerCase());
                const priceInRange = item.price >= minValue && item.price <= maxValue;
            
                return nameIncludesTerm && priceInRange;
            });
        }
    )

    const dispatch = useDispatch();
    const {goodsLoadingStatus} = useSelector(state => state.goods);
    const filteredGoods = useSelector(filteredGoodsSelector);

    useEffect(() => {
        dispatch(fetchGoods());
        // eslint-disable-next-line
    }, []); 

    const onBuy = (id) => {
        dispatch(addedGoods(id));
        dispatch(showNotification(true));
        dispatch(plusCounter(id));

        setTimeout(() => {
            dispatch(showNotification(false));
        }, 2000); 
    }

    if (goodsLoadingStatus === 'loading') {
        return <Spiner/>
    } else if (goodsLoadingStatus === "error") {
        return <Spiner/>
    }

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id}) => {
            return (<JewelryShopItem onBuy={() => onBuy(id)} name={name} price={price} key={id} id={id}/>)
        })

        return (
            <div className="catalog__wrapper catalog__wrapper-shop">
                {items}
            </div>
        )
    }

    if(filteredGoods.length === 0) {
        return (
            <div className="no-results-message">
                Sorry, but we couldn't find any products matching your search.
            </div>
            )
    }

    const catalog = renderCatalog(filteredGoods);

    return (
    <>
        <div className="catalog">
            <div className="container">
                {catalog}
            </div>

        </div>
    </>
    )
}

export default JewelryShopCatalog;