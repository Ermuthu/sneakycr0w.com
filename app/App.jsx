import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header.jsx";
import "./main.css";
import brandImage from "./images/brand.png";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={brandImage} />
        <Header />
        <h1>Hello World!</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
