import React from "react";
import s from './ProfleInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return <div>
        <div>
            <img src='https://24smi.org/public/media/resize/800x-/person/2018/06/26/qiaf094nvwba-stich.jpg'/>
        </div>
        <div className={s.description}>
            <img src={props.profile.photos.large}/>
            ava+description
        </div>
    </div>


}
export default ProfileInfo