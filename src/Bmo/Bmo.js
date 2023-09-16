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
      <div className={styles.buttonContainer}>
        <div className={styles.plusButtonBorder}>
          <div className={styles.plusButton}></div>
        </div>
        <div className={styles.buttonClusters}>
          <div className={styles.buttonCluster1}>
            <div className={styles.triangleButtonBorder}>
              <div className={styles.triangleButton}></div>
            </div>
            <div className={styles.circleButtonLg}></div>
          </div>
          <div className={styles.circleButtonSm}></div>
        </div>
      </div>
      <div className={styles.buttonClusters}>
        <div className={styles.rectangleButton}></div>
        <div className={styles.rectangleButton}></div>
      </div>
    </div>
  );
}
