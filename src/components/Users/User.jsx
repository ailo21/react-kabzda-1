import React from "react";
import s from "./users.module.css";
import userNoPhotoSmall from "../../asstes/img/user_nophoto_small.png";
import {NavLink} from "react-router-dom";

let User = ({user,isFollowingProgress,unfollow,follow}) => {

    return <div  className={s.user}>
        <div className={s.user_left}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userNoPhotoSmall} alt=""/>
                </NavLink>

            </div>
            <div>
                {user.followed ?
                    <button disabled={isFollowingProgress?.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}>unfollow</button>
                    :
                    <button disabled={isFollowingProgress?.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>follow</button>
                }
            </div>
        </div>
        <div className={s.user_right}>
            <div>{user.name}</div>
            <div>{user.status}</div>
            {/*<div>{user.location.country}</div>*/}
            {/*<div>{user.location.city}</div>*/}
        </div>
    </div>
}
export default User;