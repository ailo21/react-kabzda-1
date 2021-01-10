import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                                               name={dialog.name}/>)
    let messagesElement = props.dialogsPage.messages.map((message) => <Message key={message.id} id={message.id}
                                                                               message={message.message}/>)

    let addNewMessage = (formData) => {
        props.sandMessageText(formData.NewMessageText);
    }

    // let _handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         props.sandMessageText();
    //     }
    // }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

            <div>
                <NewMessageTextReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const NewMessageTextForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"NewMessageText"} placeholder="Enter text"/>

            </div>
            <button type={"submit"}>Отправить</button>
        </form>
    )
}
const NewMessageTextReduxForm=reduxForm({form:"NewMessageTextForm"})(NewMessageTextForm)

export default Dialogs;