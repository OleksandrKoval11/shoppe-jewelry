import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './jewelryItems.scss';
import ImagesData from '../imagesData/ImagesData';

const JewelryPromoItem = ({ name, price, id }) => {
    const image = ImagesData[id];

    return (
        <div className="catalog__item">
            <Link to={`${process.env.PUBLIC_URL}/shop/${id}`} className='catalog__item-wrapper'>
                <img src={image} alt="Lira Earrings" className="catalog__item-img"/>
                {/* <div className="catalog__item-hover" onClick={onBuy}>ADD TO CARD</div> */}
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/shop/${id}`} className="catalog__item-title">{name}</Link>
            <div className="catalog__item-price">$ {price}</div>
        </div>
    );
};

export default JewelryPromoItem;
