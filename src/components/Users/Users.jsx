import React from "react";
import s from './users.module.css';
import * as axios from 'axios';
import userNoPhotoSmall from '../../../src/asstes/img/user_nophoto_small.png';

let Users = (props) => {

    let getUser = (e) => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respnse => {
                props.setUsers(respnse.data.items);
            });
        }
        e.target.remove();
    }


    return <div className={s.user_list}>
        <button onClick={getUser}>GetUser</button>
        {
            props.users.map(u => (
                    <div key={u.id} className={s.user}>
                        <div className={s.user_left}>
                            <div><img src={u.photos.small != null ? u.photos.small : userNoPhotoSmall} alt=""/></div>
                            <div>
                                <button onClick={() => {
                                    props.followToggle(u.id)
                                }}>{u.followed ? 'unfollow' : 'follow'}</button>
                            </div>
                        </div>
                        <div className={s.user_right}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </div>
                    </div>
                )
            )
        }
    </div>
}

export default Users;