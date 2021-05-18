import React, { useState, useEffect } from 'react';
import Station from './Station';
import axios from 'axios';

export default function Stations() {
  const [stations, setStations] = useState([]);

  const getData = async () => {
    await axios
      .get('http://localhost:3001/stations')
      .then((res) => res.data)
      .then((data) => setStations(data));
  };

  useEffect(() => {
    getData();
    console.log(stations);
  }, [stations]);

  return (
    <main>
      {stations.map((station) => (
        <Station data={station} />
      ))}
    </main>
  );
}
