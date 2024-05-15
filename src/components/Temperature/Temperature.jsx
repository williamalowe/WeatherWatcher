import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Temperature.module.css";

const Temperature = ({ min, max, avg, display }) => {
  return (
    <div className={styles.temperature}>
      <div className={styles.small}>
        <h5>{min}&deg;</h5>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      <div className={styles.main}>
        <h3>{avg}&deg;</h3>
        <p>{display}</p>
      </div>
      <div className={styles.small}>
        <h5>{max}&deg;</h5>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
};

export default Temperature;
