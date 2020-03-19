import React from "react";
import s from './ProfleInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://24smi.org/public/media/resize/800x-/person/2018/06/26/qiaf094nvwba-stich.jpg'/>
        </div>
        <div className={s.description}>
            ava+description
        </div>
    </div>


}
export default ProfileInfo