import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        var userId = this.props.match.params.userId
        // userId = userId ?? 2;
        if(!userId){
            userId=this.props.authorizeUserId;
        }
        userAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizeUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps,{ setUserProfile,getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
