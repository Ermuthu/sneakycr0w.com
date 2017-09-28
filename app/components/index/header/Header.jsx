import React from 'react';

import brandImage from '../../../images/brand.png';

import './header.scss';

const Header = () => (
  <div className="header">
    <a href="/">
      <img className="brandImage" src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    </a>
    <h3 className="brand-text">Full Stack Web Developer</h3>
  </div>
);

export default Header;
