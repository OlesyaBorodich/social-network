import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>{
//         (store) => {
//             let state = store.getState().dialogsPage;
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageActionCreator())
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyActionCreator(body))
//             }
//
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps=(dispatch)=>{
return{
    updateNewMessageBody:(body)=>{

        dispatch(updateNewMessageBodyActionCreator(body));},
    sendMessage:()=>{
        dispatch(sendMessageActionCreator());}
}
}

const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
