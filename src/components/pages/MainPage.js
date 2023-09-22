import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Header from "../header/Header";
import Slider from "../slider/Slider";
import JewelryPromoCatalog from "../jewelryCatalogs/JewelryPromoCatalog";
import Footer from '../footer/Footer';

const MainPage = () => {
    return (
        <>
            <Header/>
            <Slider/>
            <div className="container">
                <div className="wrapper">
                    <div className="title">Shop The Latest</div>
                    <Link to="/shop" className="view-all">View All</Link>
                </div>
                <JewelryPromoCatalog/>
            </div>
            <Footer/>
            
        </>
    )
}

export default MainPage;