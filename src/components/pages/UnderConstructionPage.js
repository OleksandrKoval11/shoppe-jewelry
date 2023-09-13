import {Link} from 'react-router-dom'

import img from '../../assets/icons/work-in-progress.png';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const UnderConstructionPage = () => {
    return (
        <>
            <Header line={true}/>
            <div className="under-construction">
                <div className="container">
                    <h2 className="under-construction__title">Page is under construction</h2>
                    <img src={img} alt="work-in-progress" className='under-construction__img'/>
                    <Link to='/'>
                        <button className="errorPage__btn">HOMEPAGE</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UnderConstructionPage;