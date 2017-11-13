import React from 'react';
import styled, { css } from 'styled-components';

import logo from './logo.svg';

const Container = styled.div`
  color: white;
  grid-row-start: 2;
  margin: 5%;
  grid-column: span 4;
`;

const Logo = styled.img`
  height: 75px;
`;

const Button = styled.a`
  text-align: center;
  line-height: 40px;
  display: inline-block;
  width: 150px;
  height: 40px;
  background-color: #5bba49;
  border-radius: 2px;
  margin: 10px;
  color: black;
  ${props =>
    props.primary &&
    css`
      background: none;
      box-shadow: inset 0 0 0 4px #5bba49;
      color: white;
    `};
`;

const Profile = () => (
  <Container>
    <h1>About Me</h1>
    <Logo src={logo} />
    <p>
      <a href="https://twitter.com/sneakycr0w">Twitter</a>
    </p>
    <Button>Button 1</Button>
    <Button primary>Button 2</Button>
  </Container>
);

export default Profile;
