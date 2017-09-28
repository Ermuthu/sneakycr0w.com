import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Portfolio from '../portfolio/Portfolio.jsx';
import Contact from '../contact/Contact.jsx';
import About from '../about/About.jsx';
import NotFound from '../error-pages/404.jsx';

import './index.scss';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Portfolio} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default Routes;
