import Card from '../Card/Card';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData'
import { transform } from 'framer-motion';
import Loading from '../Loading/Loading';

const App = () => {
  const { weatherData, error, loading } = useWeatherData();

  console.log(weatherData)
  return (
    <main className={styles.app}>
      {
        !loading ? 
          <div className={styles.content}>
            <Card 
              day={'tomorrow'}
              weatherData={weatherData.forecast.forecastday[1]}
            />
            <Card 
              day={'today'}
              weatherData={weatherData.forecast.forecastday[0]}
              current={weatherData.current}
            />
            <Card 
              day={'after'}
              weatherData={weatherData.forecast.forecastday[2]}
            />
          </div> :
          <Loading />
      }
    </main>
  )
}
export default App;