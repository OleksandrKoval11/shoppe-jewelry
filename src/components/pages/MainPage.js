import { useSelector } from 'react-redux';

import Header from "../header/Header";
import Notification from "../notification/Notification";
import Slider from "../slider/Slider";
import JewelryPromoCatalog from "../jewelryCatalogs/JewelryPromoCatalog";
import Footer from '../footer/Footer';

const MainPage = () => {
    const {notificationStatus} = useSelector(state => state.notification);

    return (
        <>
            <Header/>
            <Slider/>
            <div className="container">
                <div className="title" style={{marginBottom: '10px'}}>Shop The Latest</div>
                {notificationStatus ? <Notification/> : null}
                <JewelryPromoCatalog/>
            </div>
            <Footer/>
            
        </>
    )
}

export default MainPage;