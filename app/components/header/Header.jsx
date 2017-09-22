import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Navigation from './navigation/Navigation.jsx';
import brandImage from '../../images/brand.png';

const styles = StyleSheet.create({
  brandImage: {
    width: 100,
    height: 100,
  },
});

const Header = () => (
  <div>
    <img className={css(styles.brandImage)} src={brandImage} alt="Ada Tesla - The SneakyCr0w" />
    <h3 className="brand-text">Full Stack Web Developer</h3>
    <Navigation />
  </div>
);

export default Header;
