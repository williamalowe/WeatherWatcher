import Card from '../Card/Card';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <div className={styles.content}>
      <Card 
          day={'today'}
        />
      <Card 
          day={'tomorrow'}
        />
        <Card 
          day={'after'}
        />
      </div>
    </main>
  )
}
export default App;