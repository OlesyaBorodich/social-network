import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state=props.dialogsPage;
    let dialogElements = state.dialogsData.map(d=><DialogsItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map(m=><Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMassageBody;
    let onSendMessageClick=()=>{
    props.sendMessage()
    }
    let onNewMessageChange=(event)=>{
        let body=event.target.value;
        props.updateNewMessageBody(body);
    }

    if(props.isAuth===false) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
            <div>
            <button onClick={onSendMessageClick}>Send</button>
            </div>
            <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'></textarea>
            </div>
        </div>);
}

export default Dialogs;
