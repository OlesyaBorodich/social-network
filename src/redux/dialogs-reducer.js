const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState={
    messagesData : [
        {id:1,message: "Hi"},
        {id:2,message: "How are you"},
        {id:3,message: "Hello"},
    ],
    dialogsData : [
        {id: 1, name: 'Оля'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Олеся'},
        {id: 4, name: 'Паша'},
        {id: 5, name: 'Катя'}
    ],
    newMassageBody:''
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                 newMassageBody: action.body
            };
        case SEND_MESSAGE:
             return {
                ...state,
                 newMassageBody:"",
                messagesData: [...state.messagesData,{id: 4, message: body}]
            };
            let body = state.newMassageBody;
        default:
            return state;
    }
}
export const updateNewMessageBodyActionCreator=(body)=>{
    return {type: UPDATE_NEW_MESSAGE_BODY,body:body}
}
export const sendMessageActionCreator=(text)=>{
    return {type: SEND_MESSAGE}
}
export default dialogsReducer
