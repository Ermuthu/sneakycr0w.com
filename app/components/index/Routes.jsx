import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Portfolio from '../portfolio/Portfolio.jsx';
import Contact from '../contact/Contact.jsx';
import About from '../about/About.jsx';

import './index.scss';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Portfolio} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
