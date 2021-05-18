import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = ({ stationName }: any) => (
  <div className={styles.footer}>
    <span className={styles.playText}>
      {stationName ? 'currently playing' : ''}
    </span>
    <span className={styles.stationName}>{stationName}</span>
  </div>
);
export default Footer;
