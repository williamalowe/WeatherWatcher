import styles from "./Loading.module.css";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.6,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.5,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.4,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.3,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.2,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
          transition: {
            delay: 0.1,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        <div className={styles.fill}></div>
      </motion.div>
    </div>
  );
};

export default Loading;
