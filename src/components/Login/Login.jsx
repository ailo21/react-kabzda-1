import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
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
            <div>
                {/*<Field component={"input"} name={"login"} placeholder={"Login"}/>*/}
                <Field
                    component={Input}
                    name={'email'}
                    placeholder={"Email"}
                    validate={[required]}/>
            </div>
            <div>
                {/*<Field component={"input"}  name={"password"}  placeholder={"Password"}/>*/}
                <Field
                    component={Input}
                    name={'password'}
                    type={'password'}
                    placeholder={"Password"}
                    validate={[required]}/>
            </div>

            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember me
            </div>
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