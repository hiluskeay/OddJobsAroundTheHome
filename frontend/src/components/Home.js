import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.hero}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome to OddJobsAroundTheHome!</h1>
      <p className={styles.subtitle}>Your satisfaction is our priority.</p>
      <button className={styles.ctaButton}>Book an Appointment</button>
    </div>
  </div>
);

export default Home;
