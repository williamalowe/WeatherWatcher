import styles from './CurrentWeather.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.location}>
        <h3>{data.location.name}</h3>
        <p>{data.location.region.slice(0,3)}</p>
      </div>
      <div className={styles.current}>
        <img src={data.current.condition.icon} alt="" />
      </div>
      <div className={styles.details}>
        <h5>{data.current.temp_c}&deg;</h5>
        <p>{data.current.condition.text}</p>
      </div>

      {/* <div className={styles.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <h3>{data.location.name}</h3>
      </div>
      <div className={styles.current}>
        <img src={data.current.condition.icon} alt="current weather icon" />
        <h5>{data.current.last_updated.slice(0, 10)}</h5>
        <h2>{data.current.temp_c}&deg;</h2>
      </div> */}

    </div>
  )
}

export default CurrentWeather
