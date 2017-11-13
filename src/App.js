import React from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';

import Projects from './Projects';
import Profile from './Profile';

import logo from './logo.svg';

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
    <Profile />
    <Projects />
  </Container>
);

// Styled Components

WebFont.load({
  google: {
    families: ['Roboto', 'Open Sans'],
  },
});

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 75px auto auto 1fr;
  grid-gap: 10px;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const Navigation = styled.header`
  display: flex;
  padding: 10px;
  grid-column: span 4;
  justify-content: end;
  grid-row-start: 1;
  box-shadow: 0 4px 2px -2px black;
`;

const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px;
  color: white;
  font-size: 0.85em;
  letter-spacing: 1px;
  align-self: center;
  margin: 5px;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 0 5px 2px #15191b;
  transition: color 0.25s;
  &:hover {
    color: #5bba49;
  }
`;

const Header = styled.div`
  grid-row-start: 2;
`;
const Logo = styled.img`
  height: 75px;
`;

export default App;
