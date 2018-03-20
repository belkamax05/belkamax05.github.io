import React from "react";
import style from "./index.scss";
console.log(style);
export default class Body extends React.Component {
    render() {
        return <div id="app-body" className={style.className}>Body</div>
    }
}