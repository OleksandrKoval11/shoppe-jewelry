import JewelryPromoItem from '../JewelryItems/JewelryPromoItem';

import './similarItems.scss';

const SimilarItems = () => {
    return (
        <div className="similar">
            <div className="container">
                <div className="similar__title">Similar Items</div>
                <div className="similar__items">
                    <JewelryPromoItem/>
                    <JewelryPromoItem/>
                    <JewelryPromoItem/>
                </div>
            </div>
        </div>
    )
}

export default SimilarItems;