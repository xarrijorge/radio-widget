import React, { useState } from 'react';

import styles from '../styles/station.module.css';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/plus.png';

const Station = ({ data, id, index }: any) => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index: any) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className={styles.station} onClick={toggle}>
      <div className={styles.stationHead}>
        <h4>{data.name}</h4>
        <h4>{data.frequency}</h4>
      </div>
      <div id={id}>
        {clicked === index ? (
          <div className={styles.details}>
            <img src={Minus} alt="" />
            <img src={data.logo} alt="" />
            <img src={Plus} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Station;
