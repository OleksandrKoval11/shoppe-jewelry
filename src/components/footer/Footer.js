import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__line"></div>
                <div className="footer__wrapper">
                    <nav>
                        <ul className="footer__nav">
                            <li>CONTACT</li>
                            <li>TERMS OF SERVICES</li>
                            <li>SHIPPING AND RETURNS</li>
                        </ul>
                    </nav>

                    <input type="text" placeholder='Give an email, get the newsletter.' className='footer__input'/>
                </div>
                <div className="footer__wrapper">
                    <div className="footer__text">
                        <span className="footer__text-black">© 2021 Shelly.</span> Terms of use <span className="footer__text-black">and</span> privacy policy.
                    </div>
                </div>
            </div>
        </footer>
    )
}   

export default Footer;