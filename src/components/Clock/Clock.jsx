import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

const Clock = ({ date }) => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div className={styles.clock}>
      <h3>{time.toLocaleTimeString()}</h3>
      <h5>{date}</h5>
      {
        time.toLocaleTimeString < '12:00' ?
        <p>Good Morning!</p>
        :
        <p>Good Evening!</p>
      }
    </div>
  )
}

export default Clock
