import React from "react";
import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setTotalUserCounter,
    setUsers,
    toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCounter(data.totalCount)
            });
    }

    onPageChanged = (PageNum) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(PageNum);
        userAPI.getUsers(PageNum, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }
    followToggle = (userId) => {
        this.props.followToggle(userId);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followToggle={this.followToggle}
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
        isFetching: state.userPage.isFetching

    }
}

export default connect(
    mapStateToProps,
    //dispatch
    {
        followToggle,
        setUsers,
        setCurrentPage,
        setTotalUserCounter,
        toggleIsFetching
    }
)(UsersContainer);