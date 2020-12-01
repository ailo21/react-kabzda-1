import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUserCounter,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (PageNum) => {
        this.props.getUsersThunkCreator(PageNum, this.props.pageSize)

    }
    followToggle = (userId) => {
        this.props.followToggle(userId);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                isFollowingProgress={this.props.isFollowingProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}

            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        isFollowingProgress: state.userPage.isFollowingProgress,
    }
}

export default compose(
    connect(
        mapStateToProps,
        //dispatch
        {
            unfollow,
            follow,
            setUsers,
            setCurrentPage,
            setTotalUserCounter,
            toggleIsFetching,
            toggleIsFollowingProgress,
            getUsersThunkCreator
        }
    ),
    withAuthRedirect
)(UsersContainer);
