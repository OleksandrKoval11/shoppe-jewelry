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
        (state) => state.filters.filterShopBy,
        (state) => state.filters.filterSortBy,
        (state) => state.filters.minValue,
        (state) => state.filters.maxValue,
        (goods, term, filterShopBy, filterSortBy, minValue, maxValue) => {
            return goods
                .filter(item => {
                    const lowerCaseName = item.name.toLowerCase();
                    const nameIncludesTerm = lowerCaseName.includes(term.toLowerCase());
                    const priceInRange = item.price >= minValue && item.price <= maxValue;
                    const typeMatchesFilter = filterShopBy === 'default' || item.type === filterShopBy;
    
                    return nameIncludesTerm && priceInRange && typeMatchesFilter;
                })
                .sort((a, b) => {
                    if (filterSortBy === 'minToMax') {
                        return a.price - b.price;
                    } else if (filterSortBy === 'maxToMin') {
                        return b.price - a.price;
                    } else {
                        return 0;
                    }
                });
        }
    );    

    const filteredGoods = useSelector(filteredGoodsSelector);
    const {goodsLoadingStatus} = useSelector(state => state.goods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoods());
        dispatch(showNotification(false));
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
        return <h5 className='no-results-message'>An error occurred while loading the data</h5>
    }

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id, sale, availability}) => {
            return (<JewelryShopItem onBuy={() => onBuy(id)} name={name} price={price} sale={sale} availability={availability} key={id} id={id}/>)
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