import React from "react";
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LogginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm=(props)=>{
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"}  name={"password"}  placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"remember"} /> Remember me
            </div>
            <div><button>Login</button></div>
        </form>
    )
}

const LogginReduxForm= reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)
export default Login;