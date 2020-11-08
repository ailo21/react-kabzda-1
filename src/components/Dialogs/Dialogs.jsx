import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElement = props.state.messages.map((message) => <Message id={message.id} message={message.message}/>)

    let SandMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            props.dispatch(addMessageActionCreator());
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

            <div>
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.state.newMessageText}
                        onKeyDown={_handleKeyDown}
                        placeholder="Enter text"

                    />
                </div>
                <button onClick={SandMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;