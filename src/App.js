import React from 'react';

import Projects from './Projects';

import logo from './logo.svg';
import { Container, Navigation, NavItem, Header, Logo } from './styled-utils';

const App = () => (
  <Container>
    <Navigation>
      <NavItem href="/home">Projects</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Navigation>
    <Header>
      <Logo src={logo} alt="Atomic Crow" />
    </Header>
    <Projects />
  </Container>
);

export default App;
