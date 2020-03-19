import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state.map(p=><Post message={p.message} countLiks={p.countLikes}/>);
    return (
    <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
        <textarea></textarea>
        <bottom>Add post</bottom>
        </div>
        <div className={s.posts}>
          <Post massage={props.state[0].massage} countLiks={props.state[0].countLikes}/>
            <Post massage={props.state[1].massage} countLiks={props.state[1].countLikes}/>
            <Post massage={props.state[2].massage} countLiks={props.state[2].countLikes}/>

        </div>
    </div>)
}
export default MyPosts