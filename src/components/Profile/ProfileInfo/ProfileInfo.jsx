import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt=""/>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}
export default ProfileInfo;