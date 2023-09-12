import { useSelector } from 'react-redux';

import Header from "../../header/Header";
import Notification from "../../notification/Notification";
import JewelryShopCatalog from "../../jewelryCatalogs/JewelryShopCatalog";
import JewelryFilterBar from "../../jewelryFilterBar/JewelryFilterBar";
import Footer from '../../footer/Footer';

import './shop.scss';

const Shop = () => {
    const {notificationStatus} = useSelector(state => state.notification);

    return (
        <>
            <Header line={true}/>
            <div className="shop__notification">
                {notificationStatus ? <Notification/> : null}
            </div>
            <div className="container">
                <div className="shop__wrapper">
                    <JewelryFilterBar/>
                    <JewelryShopCatalog/>
                </div>
            </div>
            <Footer/>   
        </>
    )
}

export default Shop;