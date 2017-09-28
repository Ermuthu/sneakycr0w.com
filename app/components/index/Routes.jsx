import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Portfolio from '../portfolio/Portfolio.jsx';
import Contact from '../contact/Contact.jsx';
import About from '../about/About.jsx';

const Routes = () => (
  <Router>
    <div className="navigation">
      <ul className="navList">
        <li className="navItem">
          <Link className="navLink" to="/">
            Portfolio
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Route path="/" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <hr />
    </div>
  </Router>
);

export default Routes;
