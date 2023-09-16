import styles from "./Bmo.module.css";

export function Bmo() {
  return (
    <div className={styles.body}>
      <div className={styles.screen}>
        <div className={styles.eyes}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
        </div>
        <div className={styles.mouthContainer}>
          <div className={styles.mouth}></div>
        </div>
      </div>
      <div className={styles.slotContainer}>
        <div className={styles.slot}></div>
        <div className={styles.slotButton}></div>
      </div>
    </div>
  );
}
