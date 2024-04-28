import ConditionStatus from '../ConditionStatus/ConditionStatus';
import CurrentIcon from '../CurrentIcon/CurrentIcon';
import Forecast from '../Forecast/Forecast';
import Header from '../Header/Header';
import Temperature from '../Temperature/Temperature';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

const wrapper = {
  hidden: {
  },
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  }
}
const child = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Card = ({ day, weatherData, current }) => {

  let displayColor = '';
  let displayDate = new Date();
  let displayTemp = '';
  let displayTempTitle = ''

  current ? displayTemp = current.temp_c : displayTemp = weatherData.day.avgtemp_c;
  if (day === 'today') {
    displayTempTitle = 'Current';
  } else {
    displayTempTitle = 'Average';
  }

  if (day === 'tomorrow') {
    displayDate.setDate(displayDate.getDate() + 1);
  }
  if (day === 'after') {
    displayDate.setDate(displayDate.getDate() + 2);
  }
  
  if (day === 'today') {
    displayColor = `var(--primary-orange)`;
  } else if (day === 'tomorrow') {
    displayColor = `var(--primary-blue)`;
  } else {
    displayColor = `var(--primary-green)`;
  }
  
  return (
    <motion.section 
      className={styles.card}
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }}
      whileHover={{
        scale: 1.1
      }}
    >
      <motion.div 
        className={styles.upper}
        style={{background: displayColor}}
        variants={wrapper}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={child}
        >
          <Header 
            title={day}
            date={displayDate}
          />
        </motion.div>
        <motion.div
          variants={child}
        >
          <CurrentIcon 
            icon={weatherData.day.condition.icon}
          />
        </motion.div>
        <motion.div
          variants={child}
        >
          <Temperature 
            min={weatherData.day.mintemp_c}
            max={weatherData.day.maxtemp_c}
            avg={displayTemp}
            display={displayTempTitle}
          />
        </motion.div>
        <motion.div
          variants={child}
        >
          <ConditionStatus 
            code={weatherData.day.condition.code}
          />
        </motion.div>     
      </motion.div>
      <div className={styles.lower}>
        {
          displayColor === 'var(--primary-blue)' ? <img src="/bluewave.svg" alt="" />
          : displayColor === 'var(--primary-green)' ? <img src="/greenwave.svg" alt="" />
          : <img src="/orangewave.svg" alt="" />
        }
        <div className={styles.lower_content} >
          <Forecast
            weatherData={weatherData}
            color={displayColor}
          />
        </div>
      </div>
      
    </motion.section>
  )
}

export default Card
