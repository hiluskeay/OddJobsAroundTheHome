import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link to="/" className={styles.navLink}>Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/about" className={styles.navLink}>About</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/services" className={styles.navLink}>Services</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/schedule" className={styles.navLink}>Schedule</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
