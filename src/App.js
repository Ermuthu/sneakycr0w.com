import React from 'react';

import Home from './Home';

import logo from './logo.svg';
import { Container, Navigation, NavItem, Header, Logo } from './styled-utils';

const App = () => (
  <Container>
    <Navigation>
      <NavItem href="/home">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Navigation>
    <Header>
      <Logo src={logo} alt="Atomic Crow" />
    </Header>
    <Home />
  </Container>
);

export default App;
