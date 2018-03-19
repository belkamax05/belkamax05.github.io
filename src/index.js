import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
class App extends React.Component {
    render() {
        return <span>Hello React 4</span>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));