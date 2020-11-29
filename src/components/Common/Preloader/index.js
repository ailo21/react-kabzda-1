import Loader from "../../../asstes/img/xopreload.gif";
import React from "react";
import s from "./preloade.module.css";

let Preloader=()=>{
    return(
        <div className={s.preloader_block}>
            <img src={Loader} alt={'test'}/>
        </div>

    );
}
export default Preloader;