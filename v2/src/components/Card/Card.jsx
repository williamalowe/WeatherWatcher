import ConditionStatus from '../ConditionStatus/ConditionStatus';
import CurrentIcon from '../CurrentIcon/CurrentIcon';
import Forecast from '../Forecast/Forecast';
import Header from '../Header/Header';
import Temperature from '../Temperature/Temperature';
import styles from './Card.module.css';

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
    <section 
      className={styles.card}
    >
      <div 
        className={styles.upper}
        style={{background: displayColor}}
      >
        <Header 
          title={day}
          date={displayDate}
        />
        <CurrentIcon 
          icon={weatherData.day.condition.icon}
        />
        <Temperature 
          min={weatherData.day.mintemp_c}
          max={weatherData.day.maxtemp_c}
          avg={displayTemp}
          display={displayTempTitle}
        />
        <ConditionStatus 
          code={weatherData.day.condition.code}
        />
        
      </div>
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
      
    </section>
  )
}

export default Card
