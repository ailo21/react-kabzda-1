import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/Common/Preloader";


export  const withSuspense=(Component)=>{
    return (props)=>{
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>

    }

}
