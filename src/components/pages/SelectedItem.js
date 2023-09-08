import { useSelector } from 'react-redux';

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Notification from "../notification/Notification";
import InfoItem from "../infoItem/InfoItem";
import InfoItemNav from "../infoItemNav/InfoItemNav";
import SimilarItems from "../similarItems/SimilarItems";

const SelectedItem = () => {
    const {notificationStatus} = useSelector(state => state.notification);

    return (
        <>
            <Header line={true}/>
            {notificationStatus ? <Notification/> : null}
            <InfoItem/>
            <InfoItemNav/>
            <SimilarItems/>
            <Footer/>
        </>
    )
}

export default SelectedItem;