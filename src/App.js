import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import { Container, Header, Main, Logo, NavItem } from './styled-utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/sneakycr0w/repos').then(res => {
      this.setState({ repos: res.data });
      console.log(this.state);
      return res.data;
    });
  }
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
