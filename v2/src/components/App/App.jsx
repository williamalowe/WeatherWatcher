import Card from '../Card/Card';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData'

const App = () => {
  const { weatherData, error, loading } = useWeatherData();

  console.log(weatherData)
  return (
    <main className={styles.app}>
      {
        !loading ? 
          <div className={styles.content}>
            <Card 
              day={'today'}
              weatherData={weatherData.forecast.forecastday[0].day}
              current={weatherData.current}
            />
            <Card 
              day={'tomorrow'}
              weatherData={weatherData.forecast.forecastday[1].day}
            />
            <Card 
              day={'after'}
              weatherData={weatherData.forecast.forecastday[2].day}
            />
          </div> :
          <>Loading</>
      }
      
    </main>
  )
}
export default App;