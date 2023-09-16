import { useDispatch, useSelector } from 'react-redux';
import { changeActiveBtn } from './AuthorizationSlice';
import './authorization.scss';

const Authorization = () => {
    const {activeBtn} = useSelector(state => state.authorization);
    const dispatch = useDispatch();

    return (
        <div className="authorization">
            <div className="authorization__container">
                <h3 className="authorization__title">My account</h3>
                <div className="authorization__wrapper">
                    <button onClick={() => dispatch(changeActiveBtn('login'))} className={activeBtn === 'login' ? "authorization__btn authorization__btn-active" : "authorization__btn"}>Sign in</button>
                    <button onClick={() => dispatch(changeActiveBtn('register'))} className={activeBtn === 'register' ? "authorization__btn authorization__btn-active" : "authorization__btn"}>Register</button>
                </div>
                {activeBtn === 'login' ? Login() : Register()}
            </div>
        </div>
    )
}

const Login = () => {
    return (
        <>  
            <input type="text" placeholder='Email' className='authorization__input-email'/>
            <input type="text" placeholder='Password' className='authorization__input'/>
            <div className="authorization__checkbox-wrapper">
                <input type="checkbox" id="myCheckbox" className='authorization__checkbox'/>
                <label htmlFor="myCheckbox" className="checkbox-label">Remember me</label>
            </div>
            <button className='authorization__sign-in'>SIGN IN</button>
            <div className="authorization__link-container">
                <a href="#!" className='authorization__link'>Have you forgotten your password?</a>
            </div>
        </>
    )
}


const Register = () => {
    return (
        <>  
            <input type="text" placeholder='Name' className='authorization__input-email'/>
            <input type="text" placeholder='Email' className='authorization__input-email'/>
            <input type="text" placeholder='Password' className='authorization__input'/>
            <button className='authorization__sign-in'>Register</button>
        </>
    )
}

export default Authorization;