import React from "react";
import s from './Profle.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfleInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(props.isAuth===false) return <Redirect to= '/login' />
    return <div>
       <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>


}
export default Profile