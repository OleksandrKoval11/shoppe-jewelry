import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './jewelryItems.scss';
import ImagesData from '../imagesData/ImagesData';

const JewelryShopItem = ({name, price, onBuy, id, sale, availability}) => {

    const status = sale ? (
        <div className="catalog__item-status">- %{sale}</div>
    ) : availability === 0 ? (
        <div className="catalog__item-status">Sold out</div> 
    ) : null;

    const image = ImagesData[id];

    return (
        <div className="catalog__item catalog__item-shop">
            <div className='catalog__item-wrapper'>
                {status}
                <Link to={`shop/${id}`}>
                    <img src={image} alt={name} className="shop__item-img"/>
                </Link>
                {availability === 0 ? null : 
                <div className="catalog__item-hover" onClick={onBuy}>
                    <button>ADD TO CARD</button>
                </div>}
            </div>
            <Link to={`shop/${id}`} className="catalog__item-title">{name}</Link>
            <div className="catalog__item-price">$ {price}</div>
        </div>
    )
}

export default JewelryShopItem;