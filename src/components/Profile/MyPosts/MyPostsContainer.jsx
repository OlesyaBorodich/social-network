import React from "react";

// import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//                 let state = store.getState();
//
//                 let onAddPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostActionCreator(text));
//
//                 }
//
//                 return <MyPosts updateNewPostActionCreator={onPostChange}
//                                 addPost={onAddPost}
//                                 posts={state.profilePage.postsData}
//                                 newPostText={state.profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
// }
let mapStateToProps =(state)=>{
    return{
        posts:state.profilePage.postsData,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostActionCreator:(text)=>{dispatch(updateNewPostActionCreator(text))},
        addPost:()=>{dispatch(addPostActionCreator())}
    }
}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer