import React from 'react';
import propTypes from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon }) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      return <ListItem component={RouterLink} active={!!match} to={to} primaryText={label} leftIcon={leftIcon} />;
    }}
  </Route>
);

NavLink.propTypes = {
  label: propTypes.String.isRequired,
  to: propTypes.String.isRequired,
  exact: propTypes.String.isRequired,
  icon: propTypes.String.isRequired,
};

export default NavLink;
