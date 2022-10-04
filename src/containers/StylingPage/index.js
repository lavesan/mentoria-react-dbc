import React from "react";

import styles from "./styles.module.scss";

export const StylingPage = () => {
  return (
    <div className={styles.customStyle}>
      <div className={styles.customStyleBox}>
        <h1 className={styles.customStyleBoxTitle}>Texto</h1>
        <button className={styles.customStyleBoxSubmit}>Submeter</button>
      </div>
      <p className={styles.customStyleText}>Texto</p>
    </div>
  );
};
