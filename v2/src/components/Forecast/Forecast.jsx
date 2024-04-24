import ForecastItem from '../ForecastItem/ForecastItem';
import styles from './Forecast.module.css';

const Forecast = ({ weatherData, color }) => {
  return (
    <section className={styles.forecast}>
      <ForecastItem 
        time={weatherData.hour[0].time}
        icon={weatherData.hour[0].condition.icon}
        temp={weatherData.hour[0].temp_c}
        color={color}
      />
      <ForecastItem 
        time={weatherData.hour[4].time}
        icon={weatherData.hour[4].condition.icon}
        temp={weatherData.hour[4].temp_c}
        color={color}
      />
      <ForecastItem 
        time={weatherData.hour[8].time}
        icon={weatherData.hour[8].condition.icon}
        temp={weatherData.hour[8].temp_c}
        color={color}
      />
      <ForecastItem 
        time={weatherData.hour[12].time}
        icon={weatherData.hour[12].condition.icon}
        temp={weatherData.hour[12].temp_c}
        color={color}
      />
      <ForecastItem 
        time={weatherData.hour[16].time}
        icon={weatherData.hour[16].condition.icon}
        temp={weatherData.hour[16].temp_c}
        color={color}
      />
      <ForecastItem 
        time={weatherData.hour[20].time}
        icon={weatherData.hour[20].condition.icon}
        temp={weatherData.hour[20].temp_c}
        color={color}
      />
    </section>
  )
}

export default Forecast
