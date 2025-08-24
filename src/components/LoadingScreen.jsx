import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <div className={`${styles.button} ${styles.close}`}></div>
            <div className={`${styles.button} ${styles.minimize}`}></div>
            <div className={`${styles.button} ${styles.maximize}`}></div>
          </div>
          <div className={styles.title}>samar@portfolio:~</div>
        </div>
        <div className={styles.content}>
          <div className={styles.loadingText}>
            <span className={styles.prompt}>$</span> Loading...
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
