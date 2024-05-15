import styles from "./CurrentIcon.module.css";

const CurrentIcon = ({ icon }) => {
  const imgURL =
    icon.toString().slice(0, 29) + "128x128" + icon.toString().slice(34);

  return (
    <div className={styles.icon}>
      <img src={imgURL} alt="weather condition icon" />
    </div>
  );
};

export default CurrentIcon;
