import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./Location.module.css";

const Location = ({ location }) => {
  return (
    <div className={styles.location}>
      <FontAwesomeIcon icon={faLocationDot} />
      <p>
        {location.location.name}, {location.location.region}
      </p>
    </div>
  );
};

export default Location;
