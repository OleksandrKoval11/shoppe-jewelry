import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeFilter } from '../infoItem/InfoItemSlice';
import './infoItemNav.scss';

const InfoItemNav = () => {
    const {filter} = useSelector(state => state.item);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeFilter('descr'));
    }, [])

    const onChangeFilter = (data) => {
        dispatch(changeFilter(data))
    };

    return (
        <div className="item-nav">
            <div className="container">
                <ul className="item-nav__wrapper">
                    <li><a href="#!" onClick={() => onChangeFilter('descr')} className={filter === 'descr' ? 'item-nav__link item-nav-active' : 'item-nav__link'}>Description</a></li>
                    <li><a href="#!" onClick={() => onChangeFilter('info')} className={filter === 'info' ? 'item-nav__link item-nav-active' : 'item-nav__link'}>Aditional information</a></li>
                    <li><a href="#!" onClick={() => onChangeFilter('reviews')} className={filter === 'reviews' ? 'item-nav__link item-nav-active' : 'item-nav__link'}>Reviews(0)</a></li>
                </ul>
                <div className="nav__line"></div>
                {filter === 'descr' ? Descr() : null}
                {filter === 'info' ? Info() : null}
                {filter === 'reviews' ? Reviews() : null}
            </div>
        </div>
    )
}

const Descr  = () => {
    return (
        <div className="item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</div> 
    )
}

const Info = () => {
    return (
        <ul className="item__info">
            <li className='info__catgrs-key'>Weight: <span className='info__catgrs-value'>0.3 kg</span></li>
            <li className='info__catgrs-key'>Dimentions: <span className='info__catgrs-value'>15 x 10 x 1 cm </span></li>
            <li className='info__catgrs-key'>Colours: <span className='info__catgrs-value'>Black, Browns, White</span></li>
            <li className='info__catgrs-key'>Material: <span className='info__catgrs-value'>Metal</span></li>
        </ul>
    )
}

const Reviews = () => {
    return(
        <div className="reviews">
            <div className="reviews__wrapper">
                <div className="reviews__items">
                    <div className="reviews__title">2 Reviews for lira earings</div>
                    <div className="review__item">
                        <div className="review__wrapper">
                            <div className="review__name">Scarlet withch</div>
                            <div className="review__data">6 May, 2020</div>
                        </div>
                        <div className="review__rate">STARS</div>
                        <div className="review__descr">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</div>
                        <div className="review__line"></div>
                    </div>
                    <div className="review__item">
                        <div className="review__wrapper">
                            <div className="review__name">Scarlet withch</div>
                            <div className="review__data">6 May, 2020</div>
                        </div>
                        <div className="review__rate">STARS</div>
                        <div className="review__descr">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</div>
                        <div className="review__line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoItemNav;