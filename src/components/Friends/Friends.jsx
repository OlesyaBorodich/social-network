import React from "react";
import Friend from "./Friend/Friend";
const Friends = (props) => {
return(
    <div>
    <div><Friend state={props.state} i='0'/></div>
    <div><Friend state={props.state} i='1'/></div>
    <div><Friend state={props.state} i='2'/></div>
    </div>)
}
export default Friends