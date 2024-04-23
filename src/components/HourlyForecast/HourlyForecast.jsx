import styles from './HourlyForecast.module.css';

const HourlyForecast = ({ time, icon, temp }) => {
  return (
    <div className={styles.forecast}>
      <div className={styles.time}>
        <h3>{time.slice(11, 17)}</h3>
      </div>
      <div className={styles.icon}>
        <img src={icon} alt="hourly forecast icon" />
      </div>
      <div className={styles.temp}>
      <h3>{temp}&deg;</h3>
      </div>
    </div>
  )
}

export default HourlyForecast
