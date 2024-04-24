import styles from './Header.module.css';

const Header = ({ title, date }) => {

  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <h5>{date.toString().slice(0, 15)}</h5>
    </div>
  )
}

export default Header
