import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
    updateTerm,
    setMaxValue,
    setMinValue,
    setMaxPrice,
    setMinPrice,
    setSliderMaxValue,
    setSliderMinValue,
    setfilterShopBy,
    setfilterSortBy
} from './JewelryFilterBarSlice';
import { fetchGoods } from '../jewelryCatalogs/JewelryCatalogsSlice';

import './jewelryFilterBar.scss';
import search from '../../assets/icons/searchIcon.svg';

const JewelryFilterBar = () => {
    const {goods} = useSelector(state => state.goods);
    const {term, maxPrice, minPrice, sliderMaxValue, sliderMinValue} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        if (goods.length > 0) {
            const maxPrice = Math.max(...goods.map(item => parseFloat(item.price)));
            const minPrice = Math.min(...goods.map(item => parseFloat(item.price)));
            dispatch(setSliderMaxValue(maxPrice));
            dispatch(setSliderMinValue(minPrice));
            dispatch(setMaxPrice(maxPrice));
            dispatch(setMinPrice(minPrice));
            dispatch(setMaxValue(maxPrice));
            dispatch(setMinValue(sliderMinValue));
            dispatch(setMaxValue(sliderMaxValue)); 
        }
        dispatch(setfilterShopBy('default'));
        dispatch(setfilterSortBy('default'));
        // eslint-disable-next-line
    }, [goods, dispatch]);

    useEffect(() => {
        dispatch(fetchGoods());
        // eslint-disable-next-line
    }, [])

    const handlePriceChange = (values) => {
        dispatch(setSliderMaxValue(values[1]))
        dispatch(setSliderMinValue(values[0]))
    };

    const handleInputChange = (e) => {
        const newTerm = e.target.value;
        dispatch(updateTerm(newTerm));
    };

    const handleChangeFilter = (sliderMinValue, sliderMaxValue) => {
        dispatch(setMinValue(sliderMinValue))
        dispatch(setMaxValue(sliderMaxValue))
    }

    const changeFilterShopBy = (type) => {
        dispatch(setfilterShopBy(type))
    }

    const changeFilterSortBy = (type) => {
        dispatch(setfilterSortBy(type))
    }

    const renderOptions = (arr) => {
        const uniqueTypes = new Set();
      
        arr.forEach(({ type }) => {
            uniqueTypes.add(type);
        });

        const items = Array.from(uniqueTypes).map((type, i) => {
            return (
                <option value={type} key={i}>
                    {type}
                </option>
            );
        });
      
        return items;
    }

    const optionsByType = renderOptions(goods);

    return (
        <div className="filterbar">
            <h2 className='title'>Shop The Latest</h2>
            <div className="filterbar__search__wrapper">
                <input value={term} onChange={handleInputChange} type="text" className='filterbar__search' placeholder='Search...'/>
                <img src={search} alt="search" />
            </div>

            <div>
                <select className='filterbar__sorting' onChange={(e) => changeFilterShopBy(e.target.value)}>
                    <option value="default" className='filterbar__sorting-option'>Shop By</option>
                    {optionsByType}
                </select>
            </div>
            <div>
                <select className='filterbar__sorting' onChange={(e) => changeFilterSortBy(e.target.value)}>
                    <option value="default" className='filterbar__sorting-option'>Sort By</option>
                    <option value="minToMax">Min to Max</option>
                    <option value="maxToMin">Max to Min</option>
                </select>
            </div>

            <div>
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    value={[sliderMinValue, sliderMaxValue]}
                    onChange={handlePriceChange}
                />

                <div className="filterbar__price__wrapper">
                    <div className='filterbar__price-info'>Price: ${sliderMinValue} - ${sliderMaxValue}</div>
                    <button onClick={() => handleChangeFilter(sliderMinValue, sliderMaxValue)} className='filterbar__price-btn'>Filter</button>
                </div>
            </div>        
        </div>
    )
}

export default JewelryFilterBar;