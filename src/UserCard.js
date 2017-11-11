import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans'],
  },
});
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  margin: 5px;
  flex-grow: 1;
  align-items: flex-start;
  box-shadow: 0 4px 2px -2px;
  background-color: #efefef;
  font-family: 'Roboto', sans-serif;
  min-height: 250px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  text-align: center;
  background-color: red;
  width: 100%;
  h1 {
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 5px;
`;
const CardFooter = styled.div`
  margin-top: auto;
  font-weight: normal;
  font-style: italic;
  padding: 5px;
`;
const UserCard = ({ name, description, lastCommit }) => (
  <Card>
    <CardHeader>
      <h3>{name}</h3>
    </CardHeader>
    <CardBody>
      <p>{description}</p>
    </CardBody>
    <CardFooter>
      <p>updated at: {lastCommit}</p>
    </CardFooter>
  </Card>
);

UserCard.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  lastCommit: propTypes.string.isRequired,
};

export default UserCard;
