import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://24smi.org/public/media/resize/800x-/person/2018/06/26/qiaf094nvwba-stich.jpg'/>
            {props.message}
            <div>
                <span>like</span>
                {props.countLiks}
            </div>
        </div>
    )
}
export default Post