import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sandMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs
            updateNewMessageText={onMessageChange}
            sandMessageText={sandMessage}
            state={state.dialogsPage}
        />
    )
}
// let f1=()=>{
//     return{}
// }
// let f2=()=>{
//     return{}
// }
//
// const SuperDialogsContainer=connect(f1,f2)(Dialogs);let f1=()=>{
//     return{}
// }
// let f2=()=>{
//     return{}
// }
//
// const SuperDialogsContainer=connect(f1,f2)(Dialogs);

export default DialogsContainer;