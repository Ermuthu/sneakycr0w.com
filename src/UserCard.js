import React from "react";
import propTypes from "prop-types";

const UserCard = ({ name, description, last_commit }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>{last_commit}</p>
    </div>
  );
};
