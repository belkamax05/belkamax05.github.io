import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default class Root extends React.Component {
    render() {
        return <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    }
}