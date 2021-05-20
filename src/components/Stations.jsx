import React from 'react';
import Button from './button';
import styles from '../styles/station.module.css';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/plus.png';
import Logo from '../images/albumArt.png';

const Stations = ({ stations, toggle, clicked }) => {
  return (
    <div className={styles.main}>
      {stations.map((item, index) => {
        return (
          <div key={index} className={styles.station}>
            <div onClick={() => toggle(index)} className={styles.stationHead}>
              <h4>{item.name}</h4>
              <h4>{item.frequency}</h4>
            </div>
            {clicked === index ? (
              <div className={styles.details}>
                <Button>
                  <img src={Minus} alt="" className={styles.icon} />
                </Button>
                <img src={Logo} alt="" className={styles.logo} />
                <Button>
                  <img src={Plus} alt="" className={styles.icon} />
                </Button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Stations;
