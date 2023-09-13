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
                                <li><NavLink to="/blog" activeClassName="header__link-active">Blog</NavLink></li>
                                <li><NavLink to="/story" activeClassName="header__link-active">Our Story</NavLink></li>
                            </ul>
                        </nav>  
                        <div className="header__btns">
                            <NavLink to='/search' activeClassName="header__link-active">
                                <img src={search} alt="search" />
                            </NavLink>
                            <NavLink to='/cart' activeClassName="header__link-active">
                                <img src={cart} alt="cart" />
                            </NavLink>
                            <NavLink to='/profile' activeClassName="header__link-active">
                                <img src={profile} alt="profile" />
                            </NavLink>
                        </div>
                    </div>
                </div>
                {line ? <div className="header__line"></div> : null}
            </div>
        </header>
    )
}

export default Header;