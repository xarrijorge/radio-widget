import styles from './styles/App.module.css';
import Header from './components/Header';
import Statiions from './components/Stations';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Statiions />
      <Footer />
    </div>
  );
}

export default App;
