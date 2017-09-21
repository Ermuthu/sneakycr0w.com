import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header.jsx";
import "./main.css";

class App extends React.Component {
  render() {
    return (
      <div className="test">
        <Header />
        <h1>Hello World!</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
