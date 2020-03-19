import React from "react";
import s from './Friend.module.css'
const Friend = (props) => {
return <div>
    <div className={s.item}>
        <img src='https://24smi.org/public/media/resize/800x-/person/2018/06/26/qiaf094nvwba-stich.jpg'/>
        {props.state[props.i]}
    </div>
</div>

}
export default Friend