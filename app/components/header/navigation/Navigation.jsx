import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Contact from '../../contact/Contact.jsx';
import About from '../../about/About.jsx';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Navigation = () => (
  <Router>
    <div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
export default Navigation;
