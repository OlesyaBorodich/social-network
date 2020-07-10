import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState={
    newPostText:'kzkmrf',
    postsData : [
    {id: 1, message: 'Hello!How are you?', countLikes: 29},
    {id: 2, message: 'How are you?', countLikes: 39},
    {id: 3, message: 'Hello!', countLikes: 2}
],
    profile:null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 4,
                message: state.newPostText,
                countLikes: 0
            };
            return  {
                ...state,
                postsData :[...state.postsData,newPost],
                newPostText : ''
            };
    }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText:action.newText
            };
        }
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile:action.profile
            };
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE,profile}
}
export const getUserProfile = (userId) =>(dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default profileReducer
