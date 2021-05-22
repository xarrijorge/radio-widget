import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/App.module.css';
import Header from './components/Header';
import Stations from './components/Stations';
import Station from './components/interfaces/station';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  const [stations, setStations] = useState<Array<Station>>([
    { id: -1, name: '', logo: '' },
  ]);
  const [clicked, setClicked] = useState<boolean | number | null>(false);
  const [stationName, setStationName] = useState<string>('');

  const URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/stations'
      : 'https://my-json-server.typicode.com/xarrijorge/radio-widget/stations';

  const toggle = (index: number) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    // let name = stations[index].name;
    setClicked(index);
    setStationName(stations[index].name);
  };

  useEffect((): any => {
    (async function () {
      const result = await axios.get(URI);
      setStations(result.data);
      return result.data;
    })();
  }, [URI]);

  return (
    <div className={styles.main}>
      <Header />
      <Stations stations={stations} toggle={toggle} clicked={clicked} />
      <Footer stationName={stationName} />
    </div>
  );
};

export default App;
