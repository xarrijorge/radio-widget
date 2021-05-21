import React from 'react';
import styles from '../styles/button.module.css';

export default function button(props) {
  return (
    <div onClick={() => ''} className={styles.button}>
      {props.children}
    </div>
  );
}
