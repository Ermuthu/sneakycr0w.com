import React from 'react';
import { NavLink } from 'react-router-dom';

import brandImage from '../../../images/brand.png';

import './header.scss';

const Header = () => (
  <div className="header">
    <a href="/">
      <img className="brandImage" src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    </a>
    <h3 className="brandTitle">Zachary E Sohovich</h3>
    <h4 className="brandText">Full Stack Web Developer</h4>
    <div className="navigation">
      <ul className="navList">
        <li className="navItem">
          <NavLink exact activeClassName="navLinkHome" className="navLink" to="/">
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="navLinkAbout" className="navLink" to="/about">
            About
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="navLinkContact" className="navLink" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
