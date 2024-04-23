import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './Sunrise.module.css';

const Sunrise = ({ sunrise, sunset }) => {
  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faSun} />
        </div>
        <div className={styles.time}>
          <p>Sunrise</p>
          <h5>{sunrise}</h5>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className={styles.time}>
          <p>Sunset</p>
          <h5>{sunset}</h5>
        </div>
      </div>
    </div>
  )
}

export default Sunrise
