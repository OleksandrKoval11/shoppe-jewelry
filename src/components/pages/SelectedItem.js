import Footer from "../footer/Footer";
import Header from "../header/Header";
import InfoItem from "../selectedItem/infoItem/InfoItem";
import InfoItemNav from "../selectedItem/infoItemNav/InfoItemNav";
import SimilarItems from "../selectedItem/similarItems/SimilarItems";

const SelectedItem = () => {

    return (
        <>
            <Header line={true}/>
            <InfoItem/>
            <InfoItemNav/>
            <SimilarItems/>
            <Footer/>
        </>
    )
}

export default SelectedItem;