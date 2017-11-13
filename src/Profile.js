import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  grid-row-start: 3;
  margin: 5%;
  a {
    color: white;
  }
`;
const Profile = () => (
  <Container>
    <h1>About Me</h1>
    <p>
      <a href="https://twitter.com/sneakycr0w">Twitter</a>
    </p>
  </Container>
);

export default Profile;
