import CurrentIcon from '../CurrentIcon/CurrentIcon';
import Header from '../Header/Header';
import styles from './Card.module.css';

const Card = ({ day, weatherData }) => {
  let displayColor = '';
  let displayDate = new Date();

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
          icon={weatherData.condition.icon}
        />
      </div>
      <div className={styles.lower}>
        {
          displayColor === 'var(--primary-blue)' ? <img src="/bluewave.svg" alt="" />
          : displayColor === 'var(--primary-green)' ? <img src="/greenwave.svg" alt="" />
          : <img src="/orangewave.svg" alt="" />

        }
      </div>
      
    </section>
  )
}

export default Card
