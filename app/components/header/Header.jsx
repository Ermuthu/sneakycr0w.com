import React from 'react';

import Navigation from './navigation/Navigation.jsx';
import brandImage from '../../images/brand.png';

import './header.scss';

const Header = () => (
  <div className="header">
    <a href="/">
      <img className="brandImage" src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    </a>
    <h3 className="brand-text">Full Stack Web Developer</h3>
    <Navigation />
  </div>
);

export default Header;
