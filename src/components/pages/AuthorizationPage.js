import Authorization from "../authorization/Authorization";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const AuthorizationPage = () => {
    return(
        <>
            <Header line={true}/>
            <Authorization/>
            <Footer/>
        </>
    )
}

export default AuthorizationPage;