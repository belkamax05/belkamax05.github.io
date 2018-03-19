import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    render() {
        return <span>Hello React 2</span>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));