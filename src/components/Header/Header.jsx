import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>  :
                    <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )

}
export default Header;