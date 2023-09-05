import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './jewelryItems.scss';
import img from '../../assets/img/Cards/01.jpg';

const JewelryPromoItem = ({name, price, id}) => {
    return (
        <div className="catalog__item">
            <Link to={`shop/${id}`} className='catalog__item-wrapper'>
                <img src={img} alt="Lira Earrings" className="catalog__item-img"/>
                {/* <div className="catalog__item-hover" onClick={onBuy}>ADD TO CARD</div> */}
            </Link>
            <Link to={`shop/${id}`}className="catalog__item-title">{name}</Link>
            <div className="catalog__item-price">$ {price}</div>
        </div>
    )
}

export default JewelryPromoItem;