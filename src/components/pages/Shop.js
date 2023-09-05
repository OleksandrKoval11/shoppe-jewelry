import { useSelector } from 'react-redux';

import Header from "../header/Header";
import Notification from "../notification/Notification";
import JewelryShopCatalog from "../jewelryCatalogs/JewelryShopCatalog";
import JewelryFilterBar from "../jewelryFilterBar/JewelryFilterBar";
import Footer from '../footer/Footer';

const Shop = () => {
    const {notificationStatus} = useSelector(state => state.notification);

    return (
        <>
            <Header line={true}/>
            {notificationStatus ? <Notification/> : null}
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