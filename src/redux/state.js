
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store={
    _state : {
        friendsData:['Миша','Оля','Маша'],
        profilePage:{
            newPostText:'kzkmrf',
            postsData : [
                {id: 1, message: 'Hello!How are you?', countLikes: 29},
                {id: 2, message: 'How are you?', countLikes: 39},
                {id: 3, message: 'Hello!', countLikes: 2}
            ]
        },
        dialogsPage:{
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
        },
        sidebar:{}
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    addPost () {
        let newPost = {
            id:4,
            message: this._state.profilePage.newPostText,
            countLikes:0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText='';
       this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText=newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        this._state.profilePage=profileReducer( this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer( this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer( this._state.sidebar,action);
            this._callSubscriber(this._state);
        }
}



export default store;
window.store= store;