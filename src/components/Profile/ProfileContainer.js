import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        var userId = this.props.match.params.userId
        userId = userId ?? 2;
        userAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login" } />;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {
        setUserProfile
    }
)(WithUrlDataProfileContainer);
