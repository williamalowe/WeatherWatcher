import conditions from '../../assets/conditions.json';
import styles from './ConditionStatus.module.css';

const ConditionStatus = ({ code }) => {
  let message = 'not found';

  for (let i = 0; i < conditions.length; i++) {
    if (code === conditions[i].code) {
      message = conditions[i].condition;
    }
  }

  return (
    <div className={styles.condition}>
      <p>
        {message}
      </p>
    </div>
  )
}

export default ConditionStatus
