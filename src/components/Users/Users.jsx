import React from "react";
import s from "./users.module.css";
import userNoPhotoSmall from "../../asstes/img/user_nophoto_small.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i<21; i++) {
        pages.push(i);
    }

    return <div className={s.user_list}>
        <div>
            {pages.map(p => (
                    <span className={s.pager + ' ' + (props.currentPage === p ? s.pager_selected : '')}
                          onClick={(e) => {
                              props.onPageChanged(p)
                          }}
                    >{p}</span>
                )
            )}
        </div>

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
export  default Users;