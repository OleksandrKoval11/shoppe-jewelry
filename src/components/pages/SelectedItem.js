import Footer from "../footer/Footer";
import Header from "../header/Header";
import InfoItem from "../infoItem/InfoItem";
import InfoItemNav from "../infoItemNav/InfoItemNav";
import SimilarItems from "../similarItems/SimilarItems";

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