import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './jewelryItems.scss';
import img from '../../assets/img/Cards/01.jpg';

const JewelryShopItem = ({name, price, onBuy, id}) => {

    return (
        <div className="catalog__item catalog__item-shop">
            <div className='catalog__item-wrapper'>
                <Link to={`shop/${id}`}>
                    <img src={img} alt={name} className="shop__item-img"/>
                </Link>
                <div className="catalog__item-hover" onClick={onBuy}>
                    <button>ADD TO CARD</button>
                </div>
            </div>
            <Link to={`shop/${id}`} className="catalog__item-title">{name}</Link>
            <div className="catalog__item-price">$ {price}</div>
        </div>
    )
}

export default JewelryShopItem;