import HourlyForecast from '../HourlyForecast/HourlyForecast';
import styles from './ForecastList.module.css';

const ForecastList = ({weatherData}) => {
  return (
    <div className={styles.list}>
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[0].time}
        icon={weatherData.forecast.forecastday[0].hour[0].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[0].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[4].time}
        icon={weatherData.forecast.forecastday[0].hour[4].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[4].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[8].time}
        icon={weatherData.forecast.forecastday[0].hour[8].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[8].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[12].time}
        icon={weatherData.forecast.forecastday[0].hour[12].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[12].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[16].time}
        icon={weatherData.forecast.forecastday[0].hour[16].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[16].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[0].hour[20].time}
        icon={weatherData.forecast.forecastday[0].hour[20].condition.icon}
        temp={weatherData.forecast.forecastday[0].hour[20].temp_c}
      />
      <HourlyForecast 
        time={weatherData.forecast.forecastday[1].hour[0].time}
        icon={weatherData.forecast.forecastday[1].hour[0].condition.icon}
        temp={weatherData.forecast.forecastday[1].hour[0].temp_c}
      />
    </div>
  )
}

export default ForecastList
