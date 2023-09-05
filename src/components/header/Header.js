import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import './header.scss';

import search from '../../assets/icons/searchIcon.svg';
import cart from '../../assets/icons/cartIcon.svg';
import profile from '../../assets/icons/profileIcon.svg';


const Header = ({line}) => {
    
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Link to="/">S<span>HOPPE</span></Link>
                    </div>
                    <div className="header__wrapper">
                        <nav className="header__nav">
                            <ul>                           
                                <li><NavLink to="/shop" activeClassName="header__link-active" >Shop</NavLink></li>
                                <li><a href="#!" className=''>Blog</a></li>
                                <li><a href="#!" className=''>Our Story</a></li>
                            </ul>
                        </nav>  
                        <div className="header__btns">
                            <a href='#!' className=''>
                                <img src={search} alt="search" />
                            </a>
                            <NavLink to='/cart' activeClassName="header__link-active">
                                <img src={cart} alt="cart" />
                            </NavLink>
                            <a href='#!'>
                                <img src={profile} alt="profile" />
                            </a>
                        </div>
                    </div>
                </div>
                {line ? <div className="header__line"></div> : null}
            </div>
        </header>
    )
}

export default Header;