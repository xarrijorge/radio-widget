import React, { useState } from 'react';

import styles from '../styles/station.module.css';

const Station = ({ data }: any) => {
  const toggle = (event: any) => {
    event.preventDefault();
    alert(event.target.classList);
  };
  return (
    <div className={styles.station} onClick={toggle}>
      <div className={styles.stationHead}>
        <h4>{data.name}</h4>
        <h4>{data.frequency}</h4>
      </div>
      <div className={(styles.details, styles.hide)}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Station;
