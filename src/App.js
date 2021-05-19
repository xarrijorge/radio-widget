import styles from './styles/App.module.css';
import Header from './components/Header';
import Stations from './components/Stations';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Stations />
      <Footer />
    </div>
  );
}

export default App;
