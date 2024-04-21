import Cloudbg from '../../../../WeatherWise/v2/src/components/Cloudbg/Cloudbg';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <div className={styles.background}>
        <Cloudbg />
      </div>
    </main>
  )
}

export default App
