import './slider.scss';
import sliderImg from '../../assets/img/Slider/SliderImg.jpg';

const Slider = () => {
    return(
        <div className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <div className="slider__item">
                        <img src={sliderImg} alt="sliderImg" />
                        <div className="slider__item-title">Gold big hoops</div>
                        <div className="slider__item-price">$ 68,00</div>
                        <a href='#!' className='slider__item-btn'>View Product</a>
                    </div>
                </div>
                <div className="slider__active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="109" height="18" viewBox="0 0 109 18" fill="none">
                        <circle cx="9" cy="9" r="8.5" stroke="white"/>
                        <circle cx="35.2857" cy="10.1428" r="4.57143" fill="white"/>
                        <circle cx="58.1429" cy="10.1428" r="4.57143" fill="white"/>
                        <circle cx="81" cy="10.1428" r="4.57143" fill="white"/>
                        <circle cx="103.857" cy="10.1428" r="4.57143" fill="white"/>
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default Slider;