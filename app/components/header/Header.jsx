import React from "react";
import BasicExample from "../shared/navigation/Navigation.jsx";

const brand = "./img/brand.png";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <img className="brand" src="./img/brand.png" />
        <h3 classNasme="brand-text">Full Stack Web Developer</h3>
        <BasicExample />
      </div>
    );
  }
}
