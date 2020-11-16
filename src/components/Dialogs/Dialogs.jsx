import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElement = props.dialogsPage.messages.map((message) => <Message key={message.id} id={message.id} message={message.message}/>)

    let SandMessage = () => {
        props.sandMessageText();
    }
    let newMessageElement = React.createRef();
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.sandMessageText();
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
                        value={props.dialogsPage.newMessageText}
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