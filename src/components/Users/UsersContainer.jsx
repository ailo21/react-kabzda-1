import React from "react";
import {connect} from "react-redux";
import {followToggleAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followToggle: (userId) => {
            dispatch(followToggleAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);