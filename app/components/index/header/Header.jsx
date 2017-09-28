import React from 'react';
import { Link } from 'react-router-dom';

import brandImage from '../../../images/brand.png';

import './header.scss';

const Header = () => (
  <div className="header">
    <a href="/">
      <img className="brandImage" src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    </a>
    <h3 className="brand-text">Full Stack Web Developer</h3>
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
    </div>
  </div>
);

export default Header;
