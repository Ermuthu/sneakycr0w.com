import React from 'react';
import propTypes from 'prop-types';

const UserCard = ({ name, description, lastCommit }) => (
  <div>
    <h3>{name}</h3>
    <h4>{description}</h4>
    <p>{lastCommit}</p>
  </div>
);

UserCard.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  lastCommit: propTypes.string.isRequired,
};

export default UserCard;
