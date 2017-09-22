import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Contact from '../../contact/Contact.jsx';
import About from '../../about/About.jsx';
import Portfolio from '../../portfolio/Portfolio.jsx';

import styles from './navigation.css';

const Navigation = () => (
  <Router>
    <div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Portfolio</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Navigation;
