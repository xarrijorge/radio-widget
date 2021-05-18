import React from 'react';
import BackArrow from '../images/icons/back-arrow.png';
import Switch from '../images/icons/switch.png';

import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={BackArrow} alt="back arrow" className={styles.icon} />
      <h1>Stations</h1>
      <img src={Switch} alt="power switch" className={styles.icon} />
    </div>
  );
};

export default Header;
