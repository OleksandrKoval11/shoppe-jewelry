import './infoItemNav.scss';

const InfoItemNav = () => {
    return (
        <div className="item-nav">
            <div className="container">
                <ul className="item-nav__wrapper">
                    <li><a href="#!" className='item-nav__link'>Description</a></li>
                    <li><a href="#!" className='item-nav__link item-nav-active'>Aditional information</a></li>
                    <li><a href="#!" className='item-nav__link'>Reviews(0)</a></li>
                </ul>
                <div className="nav__line"></div>
                <div className="item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</div>
                <ul className="item__info">
                    <li className='info__catgrs-key'>Weight: <span className='info__catgrs-value'>0.3 kg</span></li>
                    <li className='info__catgrs-key'>Dimentions: <span className='info__catgrs-value'>15 x 10 x 1 cm </span></li>
                    <li className='info__catgrs-key'>Colours: <span className='info__catgrs-value'>Black, Browns, White</span></li>
                    <li className='info__catgrs-key'>Material: <span className='info__catgrs-value'>Metal</span></li>
                </ul>
            </div>
        </div>
    )
}

export default InfoItemNav;