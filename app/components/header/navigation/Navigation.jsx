import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Contact from '../../contact/Contact.jsx';
import About from '../../about/About.jsx';
import Portfolio from '../../portfolio/Portfolio.jsx';

import './navigation.scss';

const Navigation = () => (
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

      <hr />
      <Route path="/" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Navigation;
