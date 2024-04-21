import Cloudbg from '../../../../WeatherWise/v2/src/components/Cloudbg/Cloudbg';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData/useWeatherData';
import LocationSearchbar from '../LocationSearchbar/LocationSearchbar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const App = () => {
  const { weatherData, error, loading } = useWeatherData();

  return (
    <main className={styles.app}>
      <div className={styles.background}>
        <Cloudbg />
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          {/* Main Content */}
        </div>
        <div className={styles.sidebar}>
          <LocationSearchbar />
          <CurrentWeather />
        </div>
      </div>
    </main>
  )
}

export default App
