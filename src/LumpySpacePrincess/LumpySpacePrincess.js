import styles from "./LumpySpacePrincess.module.css";

export function LumpySpacePrincess({ isBorder }) {
  return (
    <div className={styles.body}>
      <div
        className={[styles.blob, styles.blobLg, styles.blob1].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobLg, styles.blob2].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobLg, styles.blob3].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobMed, styles.blob4].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobMed, styles.blob5].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobSm, styles.blob6].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobSm, styles.blob7].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobSm, styles.blob8].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobSm, styles.blob9].join(" ")}
      ></div>
      <div
        className={[styles.blob, styles.blobSm, styles.blob10].join(" ")}
      ></div>
      <div className={styles.starBorder}>
        <div className={styles.star}></div>
      </div>
      <div className={styles.eyes}>
        <div className={styles.leftEye}>
          <div className={styles.leftEyebrow}></div>
          <div className={styles.eye}></div>
        </div>
        <div className={styles.rightEye}>
          <div className={styles.rightEyebrow}></div>
          <div className={styles.eye}></div>
        </div>
      </div>
      <div className={styles.mouthContainer}>
        <div className={styles.mouth}></div>
        <div className={styles.mouthLine}></div>
      </div>
      <div className={styles.leftHand}></div>
      <div className={styles.rightHand}></div>
    </div>
  );
}
