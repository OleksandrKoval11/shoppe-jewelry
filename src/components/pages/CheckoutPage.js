import Checkout from "../checkout/Checkout";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const CheckoutPage = () => {
    return(
        <>
            <Header line={true}/>
            <Checkout/>
            <Footer/>
        </>
    )
}

export default CheckoutPage;