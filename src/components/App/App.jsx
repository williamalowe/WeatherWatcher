import Cloudbg from '../../../../WeatherWise/v2/src/components/Cloudbg/Cloudbg';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData/useWeatherData';
import LocationSearchbar from '../LocationSearchbar/LocationSearchbar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import ForecastList from '../ForecastList/ForecastList';
import Sunrise from '../Sunrise/Sunrise';
import Clock from '../Clock/Clock';

const App = () => {
  const { weatherData, error, loading } = useWeatherData();

  return (
    <main className={styles.app}>
      <div className={styles.background}>
        <Cloudbg />
      </div>
      {
        loading ? <>Loading</> : 
          <div className={styles.content}>
            <div className={styles.main}>
              <Clock 
                date={weatherData.forecast.forecastday[0].date}
              />
            </div>
            <div className={styles.sidebar}>
              <LocationSearchbar />
              <CurrentWeather
                data={weatherData}
              />
              <ForecastList 
                weatherData={weatherData}
              />
              <Sunrise 
                sunrise={weatherData.forecast.forecastday[0].astro.sunrise}
                sunset={weatherData.forecast.forecastday[0].astro.sunset}

              />
            </div>
          </div>
      }
    </main>
  )
}

export default App
