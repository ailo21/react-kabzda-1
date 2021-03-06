import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FreindList from "../Freinds/FreindList/FreindList";

const Navbar = (props) => {
// debugger;
    let freinds = props.siteBar.friends;

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
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <FreindList state={freinds}/>
        </nav>
    )

}
export default Navbar;