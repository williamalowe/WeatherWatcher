import Card from '../Card/Card';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData'
import Loading from '../Loading/Loading';
import Location from '../Location/Location';
import { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState('Melbourne');
  let latitude = '';
  let longitude = '';

  const getLatLong = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setLocation(latitude + ' ' + longitude);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLatLong);
  } else {
    alert ('Geolocation unavailable, default set to Melbourne');
  }

  const { weatherData, error, loading } = useWeatherData(location);

  return (
    <main className={styles.app}>
      {/* <p>{location}</p> */}
      {
        !loading ?
          <>
            {/* <Location 
              location={weatherData}
            /> */}
            <div className={styles.content}>
              <Card 
                day={'today'}
                weatherData={weatherData.forecast.forecastday[0]}
                current={weatherData.current}
              />
              <Card 
                day={'tomorrow'}
                weatherData={weatherData.forecast.forecastday[1]}
              />
              <Card 
                day={'after'}
                weatherData={weatherData.forecast.forecastday[2]}
              />
            </div>
            <div className={styles.mob_view}>
              <div className={styles.mob_button}>
                <button>
                  +
                </button>
              </div>
              <div className={styles.card}>
                <Card 
                  day={'today'}
                  weatherData={weatherData.forecast.forecastday[0]}
                  current={weatherData.current}
                />
              </div>
              <div className={styles.mob_button}>
                <button>
                  -
                </button>
              </div>
            </div>
          </>
          :
          <Loading />
      }
    </main>
  )
}
export default App;