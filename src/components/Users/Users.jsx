import React from "react";
import s from "./users.module.css";
import userNoPhotoSmall from "../../asstes/img/user_nophoto_small.png";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

let Users = (props) => {
    // debugger;

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i < 21; i++) {
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
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userNoPhotoSmall} alt=""/>
                                </NavLink>

                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.isFollowingProgress?.some(id => id === u.id)} onClick={() => {

                                        props.toggleIsFollowingProgress(true, u.id);

                                        userAPI.deleteFollow(u.id)
                                            .then(respnse => {
                                                if (respnse.resultCode === 0) {
                                                    props.followToggle(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id);
                                            });
                                    }
                                    }>unfollow</button>
                                    :
                                    <button disabled={props.isFollowingProgress?.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id);
                                        userAPI.postFollow(u.id)
                                            .then(respnse => {
                                                if (respnse.resultCode === 0) {
                                                    props.followToggle(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id);
                                            });
                                    }
                                    }>follow</button>
                                }
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