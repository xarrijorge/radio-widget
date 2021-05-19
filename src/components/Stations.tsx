import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import axios from 'axios';
import styles from '../styles/stations.module.css';

export default function Stations() {
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

  return (
    <main className={styles.main}>
      {stations.map((station, index) => (
        <Accordion index={index} item={station} />
      ))}
    </main>
  );
}
