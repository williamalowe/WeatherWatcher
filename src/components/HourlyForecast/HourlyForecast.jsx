import styles from './HourlyForecast.module.css';

const HourlyForecast = () => {
  return (
    <div className={styles.forecast}>
      <div className={styles.time}>
        <h3>forecast.forecastday[0].hour.time.slice(11,17)</h3>
      </div>
      <div className={styles.icon}>
        <h3>forecast.forecastday[0].hour.condition.icon</h3>
      </div>
      <div className={styles.temp}>
      <h3>forecast.forecastday[0].hour.temp_c</h3>
      </div>
    </div>
  )
}

export default HourlyForecast
