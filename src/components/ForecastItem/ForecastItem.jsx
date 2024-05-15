import styles from "./ForecastItem.module.css";

const ForecastItem = ({ time, icon, temp, color }) => {
  return (
    <div className={styles.item}>
      <h5 style={{ color: color }}>{time.slice(11)}</h5>
      <img src={icon} alt="forecast icon" />
      <h5 style={{ color: color }}>{temp}&deg;</h5>
    </div>
  );
};

export default ForecastItem;
