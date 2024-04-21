import styles from './LocationSearchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const LocationSearchbar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.search_icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input type="text" placeholder='Search Locations...'/>
      <div className={styles.location_icon}>
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
    </div>
  )
}

export default LocationSearchbar
