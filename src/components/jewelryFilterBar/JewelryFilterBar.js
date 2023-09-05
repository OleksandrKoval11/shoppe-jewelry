import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { updateTerm } from './JewelryFilterBarSlice';

import './jewelryFilterBar.scss';
import search from '../../assets/icons/searchIcon.svg';

const JewelryFilterBar = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handlePriceChange = (values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);
    };

    const {term} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const newTerm = e.target.value;
        dispatch(updateTerm(newTerm));
      };

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
                        min={0}
                        max={100}
                        value={[minValue, maxValue]}
                        onChange={handlePriceChange}
                    />

                    <div className="filterbar__price__wrapper">
                        <div className='filterbar__price-info'>Price: ${minValue} - ${maxValue}</div>
                        <button className='filterbar__price-btn'>Filter</button>
                    </div>
                </div>        

            {/* </div> */}
        </div>
    )
}

export default JewelryFilterBar;