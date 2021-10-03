import React from "react";
import s from "./users.module.css";
import Paginator from "../Common/Paginator/index";
import User from "./User";

let Users = ({users, currentPage, totalUserCount, pageSize, onPageChanged, isFollowingProgress, follow, unfollow}) => {

    return <div className={s.user_list}>
        <Paginator currentPage={currentPage} totalUserCount={totalUserCount} pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id} user={u} isFollowingProgress={isFollowingProgress} follow={follow}
                              unfollow={unfollow}/>)}
    </div>
}
export default Users;