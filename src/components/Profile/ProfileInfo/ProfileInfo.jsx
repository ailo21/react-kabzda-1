import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (

        <div>

            <div className={s.descriptionBlock}>ava + description</div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={"Hello world!"}/>
            <h4>{props.profile.fullName}</h4>
            {
                props.profile.lookingForAJob?<p>Ищу работу: <span>{props.profile.lookingForAJobDescription}</span></p>:<p>Не ищу работу.</p>
            }
        </div>
    )
}
export default ProfileInfo;