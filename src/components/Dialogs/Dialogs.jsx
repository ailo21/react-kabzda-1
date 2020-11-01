import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElement = props.state.messages.map((message) => <Message id={message.id} message={message.message}/>)

    let newMessageElement=React.createRef();
    let SandMessage=()=>{
        let text=newMessageElement.current.value;
        alert(text);
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
                <div><textarea ref={newMessageElement} cols="30" rows="2" placeholder="Введите текст сообщения"></textarea></div>
                <button onClick={SandMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;