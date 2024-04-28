import Card from '../Card/Card';
import styles from './App.module.css';
import useWeatherData from '../../hooks/useWeatherData'
import Loading from '../Loading/Loading';
import Location from '../Location/Location';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState('Melbourne');
  const [mobCard, setMobCard] = useState(0);
  let latitude = '';
  let longitude = '';

  const getLatLong = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setLocation(latitude + ' ' + longitude);
  }
  const nextCard = () => {
    if (mobCard === 2) {
      setMobCard(0);
    } else {
      setMobCard(mobCard + 1);
    }
    console.log(mobCard);
  }
  const prevCard = () => {
    if (mobCard === 0) {
      setMobCard(2);
    } else {
      setMobCard(mobCard - 1);
    }
    console.log(mobCard);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLatLong);
  } else {
    alert ('Geolocation unavailable, default set to Melbourne');
  }

  const { weatherData, error, loading } = useWeatherData(location);

  return (
    <main className={styles.app}>
      <p>{location}</p>
      {
        !loading ?
          <>
            <div className={styles.location}>
              <Location 
                location={weatherData}
              />
            </div>
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
                day={'later'}
                weatherData={weatherData.forecast.forecastday[2]}
              />
            </div>
            <div className={styles.mob_view}>
              <div className={styles.mob_button}>
                <button onClick={prevCard}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
              <div className={styles.card}>
                <AnimatePresence mode="popLayout">
                  {
                    mobCard === 0 &&
                    <motion.div
                      initial={{
                        rotate: -90,
                        y: '100%',
                        x: '-100%'
                      }}
                      animate={{
                        rotate: 0,
                        y: 0,
                        x: 0
                      }}
                      exit={{
                        rotate: 90,
                        y: '100%',
                        x: '100%'
                      }}
                      transition={{
                        type: "spring", 
                        bounce: 0
                      }}
                    >
                      <Card 
                        day={'today'}
                        weatherData={weatherData.forecast.forecastday[0]}
                        current={weatherData.current}
                      />
                    </motion.div>
                  }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                  {
                    mobCard === 1 &&
                    <motion.div
                      initial={{
                        rotate: -90,
                        y: '100%',
                        x: '-100%'
                      }}
                      animate={{
                        rotate: 0,
                        y: 0,
                        x: 0
                      }}
                      exit={{
                        rotate: 90,
                        y: '100%',
                        x: '100%'
                      }}
                      transition={{
                        type: "spring", bounce: 0
                      }}
                    >
                      <Card 
                        day={'tomorrow'}
                        weatherData={weatherData.forecast.forecastday[1]}
                      />
                    </motion.div>
                  }
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                  {
                    mobCard === 2 &&
                    <motion.div
                      initial={{
                        rotate: -90,
                        y: '100%',
                        x: '-100%'
                      }}
                      animate={{
                        rotate: 0,
                        y: 0,
                        x: 0
                      }}
                      exit={{
                        rotate: 90,
                        y: '100%',
                        x: '100%'
                      }}
                      transition={{
                        type: "spring", bounce: 0
                      }}
                    >
                      <Card 
                        day={'later'}
                        weatherData={weatherData.forecast.forecastday[2]}
                      />
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
              <div className={styles.mob_button}>
                <button onClick={nextCard}>
                  <FontAwesomeIcon icon={faArrowRight} />
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