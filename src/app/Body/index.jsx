import React from "react";
import style from "./index.scss";
console.log(style);
export default class Body extends React.Component {
    render() {
        return <div className={style.className}>
            <h1>Body</h1>
        </div>
    }
}