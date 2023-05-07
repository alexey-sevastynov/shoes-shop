import React from "react";
import styles from "./header.module.scss";
import arrow from "../../assets/image/arrow.png";

interface LanguagePopupProps {}

const LanguagePopup: React.FC<LanguagePopupProps> = () => {
  return (
    <>
      <div className={styles.blockArrow}>
        <p>UA</p>
        <img src={arrow} alt="arrow" width={8} height={8} />
      </div>
      <div className={styles.popup}>
        <ul>
          <li>UKRAINE</li>
          <li>ENGLISH</li>
        </ul>
      </div>
    </>
  );
};

export default LanguagePopup;
