import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (

        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt=""/>
            <div className={s.descriptionBlock}>ava + description</div>
            <img src={props.profile.photos.large} alt=""/>
            <h4>{props.profile.fullName}</h4>
            {
                props.profile.lookingForAJob?<p>Ищу работу: <span>{props.profile.lookingForAJobDescription}</span></p>:<p>Не ищу работу.</p>
            }
        </div>
    )
}
export default ProfileInfo;