import './checkout.scss';

const Checkout = () => {
    return(
        <div className="checkout">
            <div className="container">
                <h2 className="checkout__title">Checkout</h2>
                <div className="checkout__wrapper">
                    <div className="coupon__section">
                        <span className="coupon__mark-text">Returning customer? <a href="#!" className="coupon__link">Click here to login</a></span>
                        <span className="coupon__mark-text">Have a coupon? <a href="#!" className="coupon__link">Click here to enter your code</a></span>
                        <div className="coupon">
                            <div className="coupon__text">If you have a coupon code, please apply it below.</div>
                            <div className="coupon__wrapper">
                                <input className="checkout__input" type="text" placeholder='Coupon Code'/>
                                <button className="coupon__btn">APPLY COUPON</button>
                            </div>
                        </div>
                    </div>
                    <div className="details__section">
                        <div className="details__title">Billing Details</div>
                        <div className="details__wrapper">
                            <input type="text" className="details__input" placeholder='First name *'/>
                            <input type="text" className="details__input" placeholder='Last name *'/>
                        </div>
                        <input type="text" className="details__input" placeholder='Company Name'/>
                        <select className="details__input">
                            <option className="details__input-placeholder" value="" disabled selected hidden>Country</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="germany">Germany</option>
                            <option value="ukraine">Ukraine</option>
                        </select>
                        <input type="text" className="details__input" placeholder='Street Address *'/>
                        <input type="text" className="details__input" placeholder='Postcode / ZIP *'/>
                        <input type="text" className="details__input" placeholder='Town / City *'/>
                        <input type="text" className="details__input" placeholder='Phone *'/>
                        <input type="text" className="details__input" placeholder='Email *'/>
                        <input type="text" className="details__input" placeholder='Order notes'/>   
                    </div>
                    <div className="order__section">
                        <div className="order__title">Your order</div>
                        <div className="order__card">
                            <div className="order__wrapper">
                                <div className="order__text">PRODUCT</div>
                                <div className="order__text">TOTAL</div>
                            </div>
                            <div className="order__products">
                                <div className="order__product">
                                    <div className="order__product-name">Lira Earrings</div>
                                    <div className="order__product-price">$64</div>
                                </div>
                            </div>
                            <div className="order__subtotal-wrapper">
                                <div className="order__subtotal-text">SUBTOTAL</div>
                                <div className="order__subtotal-price">$85</div>
                            </div>
                            <div className="order__shipping-wrapper">
                                <div className="order__shipping-text">SHIPPING</div>
                                <div className="order__shipping-price">Free shipping</div>
                            </div>
                            <div className="order__total-wrapper">
                                <div className="order__total-text">TOTAL</div>
                                <div className="order__total-price">$85</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;