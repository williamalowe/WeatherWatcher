import styles from './Card.module.css';

const Card = ({ color, weatherData }) => {
  return (
    <section 
      className={styles.card}
    >
      <div 
        className={styles.upper}
        style={{background: color}}
      >

      </div>
      <div className={styles.lower}>
        {
          color === 'var(--primary-blue)' ? <img src="/bluewave.svg" alt="" />
          : color === 'var(--primary-green)' ? <img src="/greenwave.svg" alt="" />
          : <img src="/orangewave.svg" alt="" />

        }
      </div>
      
    </section>
  )
}

export default Card
