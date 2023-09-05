import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import { fetchGoods, addedGoods } from './JewelryCatalogsSlice';
import { showNotification } from '../notification/NotificationSlice';

import JewelryShopItem from '../JewelryItems/JewelryShopItem';
import './jewelryCatalogs.scss';

const JewelryShopCatalog = () => {
    const filteredGoodsSelector = createSelector(
        (state) => state.goods.goods,
        (state) => state.filters.term,
        (goods, term) => {
            return goods.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
        }
    )

    const dispatch = useDispatch();

    const filteredGoods = useSelector(filteredGoodsSelector);

    useEffect(() => {
        dispatch(fetchGoods());
        // eslint-disable-next-line
    }, []);

    const onBuy = (id) => {
        dispatch(addedGoods(id));
        dispatch(showNotification(true))

        setTimeout(() => {
            dispatch(showNotification(false));
        }, 2000); 
    }

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id}) => {
            return (<JewelryShopItem onBuy={() => onBuy(id)} name={name} price={price} key={id} id={id}/>)
        })

        return (
            <>
                {items}
            </>
        )
    }

    const catalog = renderCatalog(filteredGoods);

    return (
    <>
        <div className="catalog">
            <div className="container">
                <div className="catalog__wrapper catalog__wrapper-shop">
                    {catalog}
                </div>
            </div>

        </div>
    </>
    )
}

export default JewelryShopCatalog;