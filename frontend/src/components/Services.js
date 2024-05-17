import React from 'react';
import styles from './Home.module.css';

const Services = () => (
  <div className={styles.hero}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h1 className={styles.title}>Our Services</h1>
      <ul className={styles.subtitle}>
        <li>Plumbing</li>
        <li>Electrical Work</li>
        <li>Carpentry</li>
        <li>General Repairs</li>
      </ul>
    </div>
  </div>
);

export default Services;
