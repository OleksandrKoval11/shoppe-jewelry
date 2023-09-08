import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, addedGoods } from './JewelryCatalogsSlice';
import { showNotification } from '../notification/NotificationSlice';

import JewelryPromoItem from '../JewelryItems/JewelryPromoItem';
import './jewelryCatalogs.scss';
import Spiner from '../spinner/Spinner';

const JewelryPromoCatalog = () => {
    const dispatch = useDispatch();

    const {goods, goodsLoadingStatus} = useSelector(state => state.goods);

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

    if (goodsLoadingStatus === 'loading') {
        return <Spiner/>
    } else if (goodsLoadingStatus === "error") {
        return <Spiner/>
    }

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id, img}) => {
            return (<JewelryPromoItem onBuy={() => onBuy(id)} img={img} name={name} price={price} key={id} id={id}/>)
        })

        return (
            <>
                {items}
            </>
        )
    }

    const catalog = renderCatalog(goods);
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__wrapper">    
                    {catalog}
                </div>
            </div>

        </div>
    )
}

export default JewelryPromoCatalog;