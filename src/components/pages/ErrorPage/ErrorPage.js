import {Link} from 'react-router-dom'

import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import './errorPage.scss';

const ErrorPage = () => {
    return (
        <>
            <Header line={true}/>
            <div className="errorPage">
                <div className="container">
                    <h2 className="errorPage__title">404 ERROR</h2>
                    <div className="errorPage__descr">This page not found; <br /> back to home and start again</div>
                    <Link to='/'>
                        <button className="errorPage__btn">HOMEPAGE</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}
 
export default ErrorPage;