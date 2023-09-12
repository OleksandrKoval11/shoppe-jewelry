import { useSelector } from 'react-redux/es/hooks/useSelector';
import { createSelector } from '@reduxjs/toolkit';

import JewelryPromoItem from '../../JewelryItems/JewelryPromoItem';

import './similarItems.scss';

const SimilarItems = () => {
    const itemsSelector = createSelector(
        (state) => state.goods.goods,
        (state) => state.item.selectedItemId,
        (goods, type) => {
            return goods.filter(item => item.type === type.type)
        }
    )

    const items = useSelector(itemsSelector);

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id}) => {
            return (<JewelryPromoItem name={name} price={price} key={id} id={id}/>)
        })

        return (
            <>
                {items}
            </>
        )
    }

    const similarItems = renderCatalog(items);

    return (
        <div className="similar">
            <div className="container">
                <div className="similar__title">Similar Items</div>
                <div className="similar__items">
                    {similarItems}
                </div>
            </div>
        </div>
    )
}

export default SimilarItems;