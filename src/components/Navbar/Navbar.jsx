import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FreindList from "../Freinds/FreindList/FreindList";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Mesage</NavLink></div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <FreindList state={props.state.freinds}/>
        </nav>
    )

}
export default Navbar;