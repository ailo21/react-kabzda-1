import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {commonAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        commonAPI.getAuthMe()
            .then(data => {

                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data;
                        // debugger;
                        this.props.setAuthUserData(id, email, login)
                    }
                }
            )

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);