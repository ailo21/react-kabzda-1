import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../util/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import s from "../Common/FormsControls/FormsControls.module.css";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div>
        <h1>Login</h1>
        <LogginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>

            {createField("Email","email",[required],Input)}
            {createField("Password","password",[required],Input,{type:"password"})}
            {createField(null,"rememberMe",null,Input,{type:"checkbox"},"Remember me")}
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LogginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


export default connect(null, { login})(Login);