import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Container = styled.div`
  color: white;
  grid-row-start: 2;
  margin: 5%;
  a {
    color: white;
  }
`;

const Logo = styled.img`
  height: 75px;
`;

const Profile = () => (
  <Container>
    <h1>About Me</h1>
    <Logo src={logo} />
    <p>
      <a href="https://twitter.com/sneakycr0w">Twitter</a>
    </p>
  </Container>
);

export default Profile;
