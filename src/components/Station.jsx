import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/station.module.css';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/plus.png';
import Logo from '../images/albumArt.png';

const Station = () => {
  const [clicked, setClicked] = useState(false);
  const [stations, setStations] = useState([]);

  const getData = async () => {
    const result = await axios.get('http://localhost:3001/stations');
    setStations(result.data);
    return result.data;
  };

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  useEffect(() => {
    getData();
    console.log(stations);
  }, []);

  return (
    <>
      {stations.map((item, index) => {
        return (
          <div className={styles.station}>
            <div
              onClick={() => toggle(index)}
              key={index}
              className={styles.stationHead}
            >
              <h4>{item.name}</h4>
              <h4>{item.frequency}</h4>
            </div>
            {clicked === index ? (
              <div className={styles.details}>
                <img src={Minus} alt="" className={styles.icon} />
                <img src={Logo} alt="" className={styles.logo} />
                <img src={Plus} alt="" className={styles.icon} />
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Station;
