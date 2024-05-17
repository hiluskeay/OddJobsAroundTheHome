import React from 'react';
import styles from './Home.module.css';

const About = () => (
  <div className={styles.hero}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.subtitle}>Wordswordswordswords</p>
    </div>
  </div>
);

export default About;
