import ForecastItem from '../ForecastItem/ForecastItem';
import styles from './Forecast.module.css';
import { motion } from 'framer-motion';

const wrapper = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  }
}
const child = {
  hidden: {
    x: -20,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const Forecast = ({ weatherData, color }) => {
  return (
    <motion.section 
      className={styles.forecast}
      variants={wrapper}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[0].time}
        icon={weatherData.hour[0].condition.icon}
        temp={weatherData.hour[0].temp_c}
        color={color}
      />
      </motion.div>
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[4].time}
        icon={weatherData.hour[4].condition.icon}
        temp={weatherData.hour[4].temp_c}
        color={color}
      />
      </motion.div>
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[8].time}
        icon={weatherData.hour[8].condition.icon}
        temp={weatherData.hour[8].temp_c}
        color={color}
      />
      </motion.div>
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[12].time}
        icon={weatherData.hour[12].condition.icon}
        temp={weatherData.hour[12].temp_c}
        color={color}
      />
      </motion.div>
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[16].time}
        icon={weatherData.hour[16].condition.icon}
        temp={weatherData.hour[16].temp_c}
        color={color}
      />
      </motion.div>
      <motion.div
        variants={child}
      >
      <ForecastItem 
        time={weatherData.hour[20].time}
        icon={weatherData.hour[20].condition.icon}
        temp={weatherData.hour[20].temp_c}
        color={color}
      />
      </motion.div>
    </motion.section>
  )
}

export default Forecast
