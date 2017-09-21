import React from "react";
import Navigation from "../shared/navigation/Navigation.jsx";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h3 classNasme="brand-text">Full Stack Web Developer</h3>
        <Navigation />
      </div>
    );
  }
}
