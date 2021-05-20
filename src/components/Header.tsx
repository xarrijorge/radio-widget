import React from 'react';
import Button from './button';
import BackArrow from '../images/icons/back-arrow.png';
import Switch from '../images/icons/switch.png';

import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <Button>
        <img src={BackArrow} alt="back arrow" className={styles.icon} />
      </Button>
      <h1>Stations</h1>
      <Button>
        <img src={Switch} alt="power switch" className={styles.icon} />
      </Button>
    </div>
  );
};

export default Header;
