import React from 'react';
import Station from './interfaces/station';
import Button from './Button';
import styles from '../styles/station.module.css';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/plus.png';

const Stations = ({
  stations,
  toggle,
  clicked,
}: {
  stations: Station[];
  toggle: Function;
  clicked: any;
}): JSX.Element => {
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
                <img src={`${item.logo}`} alt="" className={styles.logo} />
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
