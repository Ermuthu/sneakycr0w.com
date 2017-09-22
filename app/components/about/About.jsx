import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import bioPicture from '../../images/bio_picture.jpg';

const styles = StyleSheet.create({
  brandImage: {
    width: 100,
    height: 100,
  },
});

const About = () => (
  <div>
    <h2>&#60;Hello World &#47;&#62;</h2>
    <img src={bioPicture} className={css(styles.brandImage)} alt="" />
    <p>
      My name is Zachary E Sohovich, I'm a <strong>Full Stack Web Developer</strong> with a passion for code. I have
      been writing code since I was 13 years old and I've loved it ever since. Currently, I love to write in React and
      Node stacks, but I also have experience with PHP, Ruby, and Python.
    </p>
  </div>
);

export default About;
