import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./index.scss";
export default class App extends React.Component {
    render() {
        return <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    }
}