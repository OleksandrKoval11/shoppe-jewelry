import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeGoods, changeCounters } from '../jewelryCatalogs/JewelryCatalogsSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import CartItem from '../cartItem/CartItem';
import Header from '../header/Header';
import './cart.scss';


const Cart = () => {
    const {orderedGoods, orderedCounters} = useSelector(state => state.goods)
    const dispatch = useDispatch();
    
    useEffect(() => {
        const newCounters = {};
        orderedGoods.forEach(item => {
            newCounters[item.id] = orderedCounters[item.id] || 1;
        });
        dispatch(changeCounters(newCounters))
        // eslint-disable-next-line
    }, [orderedGoods]);

    const onRemove = (id) => {
        dispatch(removeGoods(id));
    }

    const onPlus = (id) => {
        const newCounters = { ...orderedCounters };
        newCounters[id] = (newCounters[id] || 0) + 1;
        dispatch(changeCounters(newCounters));
    }

    const onMinus = (id) => {
        const newCounters = { ...orderedCounters };
        if (newCounters[id] > 1) {
            newCounters[id] -= 1;
            dispatch(changeCounters(newCounters));
        }
    }

    function renderCatalog (arr) {
        const items = arr.map(({name, price, id}) => {
            return (
                <CartItem 
                    onRemove={() => onRemove(id)} 
                    counter={orderedCounters[id] || 0} 
                    onPlus={() => onPlus(id)} 
                    onMinus={() => onMinus(id)} 
                    name={name} 
                    price={price} 
                    key={id}/>)
        })

        return (
            <>
                {items}
            </>
        )
    }

    let total = 0;

    orderedGoods.forEach(item => {
        total += item.price * (orderedCounters[item.id] || 0);
    });

    const content = orderedGoods.length === 0 ?
                    (<div className="empty__cart-wrapper">
                        <div className='empty__cart cart__info-main-title'>Your cart is empty</div>
                        <Link to="/shop" className='empty__cart-link'>TO SHOP</Link>
                    </div>)
                    : renderCatalog(orderedGoods);
    const coupone = orderedGoods.length > 0 ? 
                    (<>
                        <div className="cart__btn-wrapper">
                            <button className='cart__btn-white'>UPDATE CART</button>
                        </div> 
                        <div className="cart__coupons-wrapper">
                            <input type="text" className='cart__coupons-search' placeholder='Coupon Code'/>
                            <button className='cart__btn-dark'>APPLY COUPON</button>
                        </div>
                    </>) : null;

    return (
        <>
            <Header line={true}/>
            <div className="cart">
                <div className="container">
                    <div className="cart__title">Shopping Cart</div>
                    <div className="cart__wrapper">
                        <div className="cart__items">
                            {content}
                            {coupone}
                        </div>
                        <div className="cart__info">
                            <div className="cart__info-main-title">Cart totals</div>
                            <div className="cart__info-wrapper">
                                <div className="cart__info-subtotal">SUBTOTAL</div>
                                <div className="cart__info-descr">$ {total}</div>
                            </div>
                            <div className="cart__info-wrapper">
                                <div className="cart__info-title">SHIPPING</div>
                                <div className="cart__info-descr">Shipping costs will be calculated once you have provided address.</div>
                            </div>
                            <div className="cart__line"></div>
                            <div className="cart__total-wrapper">
                                <div className="cart__total">TOTAl</div>
                                <div className="cart__total">$ {total}</div>
                            </div>
                            {orderedGoods.length > 0 ? <button className='btn-cheackout'>PROCEED TO CHECKOUT</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;