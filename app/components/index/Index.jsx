import React from 'react';

import Header from '../header/Header.jsx';
import Portfolio from '../portfolio/Portfolio.jsx';

import brandImage from '../../images/brand.png';

const Index = () => (
  <div className="container">
    <img src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    <Header />
    <Portfolio />
  </div>
);

export default Index;
