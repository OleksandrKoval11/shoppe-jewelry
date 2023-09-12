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
                <div className="title" style={{marginBottom: '10px'}}>Shop The Latest</div>
                <JewelryPromoCatalog/>
            </div>
            <Footer/>
            
        </>
    )
}

export default MainPage;