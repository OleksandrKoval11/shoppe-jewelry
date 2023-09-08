import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { updateTerm, setMaxValue, setMinValue, setMaxPrice, setMinPrice, setSliderMaxValue, setSliderMinValue } from './JewelryFilterBarSlice';

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
        }
    }, [goods, dispatch]);

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

    return (
        <div className="filterbar">
            {/* <div className="container"> */}
                <h2 className='title'>Shop The Latest</h2>
                <div className="filterbar__search__wrapper">
                    <input value={term} onChange={handleInputChange} type="text" className='filterbar__search' placeholder='Search...'/>
                    <img src={search} alt="search" />
                </div>

                <div>
                    <select className='filterbar__sorting'>
                        <option value="default" className='filterbar__sorting-option'>Shop By</option>
                        <option value="Example">Example</option>
                        {/* <option value="priceHighToLow">Цена: по убыванию</option>
                        <option value="nameAtoZ">Имя: A-Z</option>
                        <option value="nameZtoA">Имя: Z-A</option> */}
                    </select>
                </div>
                <div>
                    <select className='filterbar__sorting'>
                        <option value="default" className='filterbar__sorting-option'>Shop By</option>
                        <option value="Example">Sort By</option>
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

            {/* </div> */}
        </div>
    )
}

export default JewelryFilterBar;