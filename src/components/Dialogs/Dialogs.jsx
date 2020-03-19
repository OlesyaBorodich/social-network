import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

const Dialogs = (props) => {
let dialogElements = props.state.dialogsData.map(d=><DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map(d=><Message message={d.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogsItem id={props.state.dialogsData[0].id} name={props.state.dialogsData[0].name}/>
                <DialogsItem id={props.state.dialogsData[1].id} name={props.state.dialogsData[1].name}/>
                <DialogsItem id={props.state.dialogsData[2].id} name={props.state.dialogsData[2].name}/>
                <DialogsItem id={props.state.dialogsData[3].id} name={props.state.dialogsData[3].name}/>
            </div>
            <div className={s.massages}>
                <Message message={props.state.messagesData[0].message}/>
                <Message message={props.state.messagesData[1].message}/>
                <Message message={props.state.messagesData[2].message}/>
            </div>

        </div>);
}

export default Dialogs;
