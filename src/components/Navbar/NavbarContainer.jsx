import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FreindList from "../Freinds/FreindList/FreindList";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps=(state)=>{
    return{
        siteBar:state.siteBar
    }
}
let  mapDispatchToProps=(dispatch)=>{
    return{

    }
}

const NavbarContainer=connect(mapStateToProps,mapDispatchToProps)(Navbar);
export default NavbarContainer;