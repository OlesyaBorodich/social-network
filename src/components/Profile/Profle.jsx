import React from "react";
import s from './Profle.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfleInfo";

const Profile = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPosts state={props.state}/>
    </div>


}
export default Profile