import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeFilter } from '../SelectedItemSlice';

import Reviews from './reviews/Reviews';
import Descr from './descr/Descr';
import AditInfo from './aditionalInformation/AditInfo';

import './infoItemNav.scss';

const InfoItemNav = () => {
    const {filter, selectedItemId} = useSelector(state => state.item);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeFilter('descr'));
        // eslint-disable-next-line
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
                    <li><a href="#!" onClick={() => onChangeFilter('reviews')} className={filter === 'reviews' ? 'item-nav__link item-nav-active' : 'item-nav__link'}>Reviews({selectedItemId.reviews ? selectedItemId.reviews.length : 0})</a></li>
                </ul>
                <div className="nav__line"></div>
                {filter === 'descr' ? <Descr/> : null}
                {filter === 'info' ? <AditInfo/> : null}
                {filter === 'reviews' ? <Reviews/> : null}
            </div>
        </div>
    )
}




export default InfoItemNav;