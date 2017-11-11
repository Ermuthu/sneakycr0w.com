import React, { Component } from "react";
import logo from "./logo.svg";
import { Container, Header, Main, Logo, NavItem } from "./styled-utils";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="Atomic Crow" />
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </Header>
        <Main />
      </Container>
    );
  }
}

export default App;
