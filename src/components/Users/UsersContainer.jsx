import React from "react";
import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setTotalUserCounter,
    setUsers,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(respnse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(respnse.data.items);
            this.props.setTotalUserCounter(respnse.data.totalCount)
        });
    }

    onPageChanged = (PageNum) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(PageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${PageNum}`).then(respnse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(respnse.data.items);
        });
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
// let mapDispatchToProps = (dispatch) => {
//     return {
//         followToggle: (userId) => {
//             dispatch(followToggleAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (numberPage) => {
//             dispatch(setCurrentPageAC(numberPage))
//         },
//         setTotalUserCount: (totalUserCount) => {
//             dispatch(setTotalUserCounterAC(totalUserCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

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