import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from './NavLink';

import Portfolio from '../portfolio/Portfolio.jsx';
import About from '../about/About.jsx';
import Contact from '../contact/Contact.jsx';

const navItems = [
  {
    exact: true,
    label: 'Portfolio',
    to: '/',
    icon: 'home',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'bookmark',
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'donut_large',
  },
];

const Index = () => (
  <Route
    render={({ location }) => (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
        navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
      >
        <Switch key={location.key}>
          <Route exact path="/" location={location} component={Portfolio} />
          <Route path="/about" location={location} component={About} />
          <Route path="/contact" location={location} component={Contact} />
        </Switch>
      </NavigationDrawer>
    )}
  />
);

Index.defaultProps = {
  to: '',
};

Index.propTypes = {
  to: propTypes.String,
};

export default Index;
