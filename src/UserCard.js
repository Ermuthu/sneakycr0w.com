import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid grey;
  border-radius: 6px;
  flex-basis: 200px;
  align-self: stretch;
  margin: 5px;
  flex-grow: 1;
  background-color: #f2f2f2;
  h3 {
    padding: 5px;
    border-bottom: 1px solid grey;
    text-align: center;
  }
  h4 {
    padding: 5px;
  }
  p {
    padding: 5px;
  }
`;
const UserCard = ({ name, description, lastCommit }) => (
  <Card>
    <h3>{name}</h3>
    <h4>{description}</h4>
    <p>{lastCommit}</p>
  </Card>
);

UserCard.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  lastCommit: propTypes.string.isRequired,
};

export default UserCard;
