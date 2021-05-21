import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/App.module.css';
import Header from './components/Header';
import Stations from './components/Stations';
import Footer from './components/Footer';

const App = () => {
  const [stations, setStations] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [stationName, setStationName] = useState('');

  const URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/stations'
      : 'http://my-json-server.typicode.com/xarrijorge/radio-widget/stations';

  const getData = async () => {
    const result = await axios.get(URI);
    setStations(result.data);
    return result.data;
  };
  const toggle = (index) => {
    console.log(index);
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
    setStationName(stations[index].name);
  };

  useEffect(() => {
    getData();
    console.log(process.env.NODE_ENV);
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <Stations stations={stations} toggle={toggle} clicked={clicked} />
      <Footer stationName={stationName} />
    </div>
  );
};

export default App;
