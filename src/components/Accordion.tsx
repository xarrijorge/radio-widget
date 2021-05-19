import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/station.module.css';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/plus.png';

interface UserInput {
  index: Number;
  clicked: Boolean;
  prevState: null;
}

const Accordion = ({ index, item }: any) => {
  const [clicked, setClicked] = useState<UserInput | null>(null);
  const [stations, setStations] = useState([]);

  const getData = async () => {
    const result = await axios.get('http://localhost:3001/stations');
    setStations(result.data);
    return result.data;
  };

  useEffect(() => {
    getData();
    console.log(stations);
  }, []);

  const toggle = (index: any) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div onClick={() => toggle(index)}>
      <div className={styles.station}>
        <div key={index} className={styles.stationHead}>
          <h4>{item.name}</h4>
          <h4>{item.frequency}</h4>
        </div>
        {clicked === index ? (
          <div className={styles.details}>
            <img src={Minus} alt="" />
            <img src={item.logo} alt="" />
            <img src={Plus} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Accordion;
