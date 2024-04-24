import Card from '../Card/Card';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <div className={styles.content}>
        <Card 
          color={'var(--primary-blue)'}
          weatherData={''}
        />
        <Card 
          color={'var(--primary-orange)'}
          weatherData={''}
        />
        <Card 
          color={'var(--primary-green)'}
          weatherData={''}
        />
      </div>
    </main>
  )
}
export default App;