import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedItem, counterPlus, counterMinus, getTypeOfItem } from '../SelectedItemSlice';
import { showNotification } from '../../notification/NotificationSlice';
import { fetchGoods, addCounter, addedGoods } from '../../jewelryCatalogs/JewelryCatalogsSlice';


import Notification from '../../notification/Notification';
import img from '../../../assets/img/Cards/01.jpg';

import './infoitem.scss';

const InfoItem = () => {
    const { Id } = useParams();
    const dispatch = useDispatch();

    const { goods } = useSelector(state => state.goods);
    const {selectedItemId} = useSelector(state => state.item);
    const {notificationStatus} = useSelector(state => state.notification);

    useEffect(() => {   
        dispatch(fetchGoods());
        dispatch(showNotification(false));
		// eslint-disable-next-line
	}, [Id]);

    useEffect(() => {
        const selectedItem = goods.find(item => item.id === +Id);
        dispatch(fetchSelectedItem(selectedItem));

        // eslint-disable-next-line
    }, [goods])


    const onPlus = () => {
        dispatch(counterPlus());
    }

    const onMinus = () => {
        dispatch(counterMinus());
    }

    const onBuy = () => {
        dispatch(showNotification(true));
        dispatch(addedGoods(+Id));
        dispatch(addCounter({id: Id, counter: selectedItemId.counter}));

        setTimeout(() => {
            dispatch(showNotification(false));
        }, 2000); 
    }

    const {name, price, reviews} = selectedItemId;  

    return (
        <div className="info">
            <div className="container">
                <div className="info__notification">
                    {notificationStatus ? <Notification/> : null}
                </div>
                <div className="info__wrapper">
                    <div className="info__imgs-wrapper">
                        <div className="info__imgs">
                            <img src={img} alt="img" className="info__img" />
                            <img src={img} alt="img" className="info__img" />
                            <img src={img} alt="img" className="info__img" />
                            <img src={img} alt="img" className="info__img" />
                        </div>
                        <img src={img} alt="img" className="info__main-img" />
                    </div>

                    <div className="info__text">
                        <div className="info__title">{name}</div>
                        <div className="info__price">{price} $  </div>
                        <div className="info__review__wrapper">
                            <div className="star__wrapper">
                                <svg className='star' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_888_1330)">
                                        <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_888_1330">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg  className='star' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_888_1330)">
                                        <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_888_1330">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg className='star' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_888_1330)">
                                        <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_888_1330">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg className='star' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_888_1330)">
                                        <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_888_1330">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg className='star' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_888_1330)">
                                        <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="#EFEFEF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_888_1330">
                                        <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="info__review-text">{reviews ? reviews.length : 0} customer review</div>
                        </div>
                        <div className="info__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</div>
                        <div className="info__btns-wrapper">
                            <div className="cart__item-counter-wrapper">
                                <button onClick={onMinus}>-</button>
                                <div>{selectedItemId.counter}</div>
                                <button onClick={onPlus}>+</button>
                            </div>  
                            <button onClick={onBuy} className="info__btn">ADD TO CART</button>
                        </div>
                        <ul className="info__catgrs">
                            <li className='info__catgrs-key'>SKU: <span className='info__catgrs-value'>12</span></li>
                            <li className='info__catgrs-key'>Categories: <span className='info__catgrs-value'>Fashion, Style</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoItem;