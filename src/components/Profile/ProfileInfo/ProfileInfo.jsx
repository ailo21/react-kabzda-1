import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userNoPhotoSmall from "../../../asstes/img/user_nophoto_small.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected=(e)=>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>ava + description</div>
            <img className={s.avatar}
                 src={props.profile.photos!==undefined ? props.profile.photos.large : userNoPhotoSmall} alt=""/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <h4>{props.profile.fullName}</h4>
            {
                props.profile.lookingForAJob ?
                    <p>Ищу работу: <span>{props.profile.lookingForAJobDescription}</span></p> : <p>Не ищу работу.</p>
            }
        </div>
    )
}
export default ProfileInfo;