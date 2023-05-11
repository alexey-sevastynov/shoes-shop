import React from "react";
import styles from "./sort.module.scss";
import Popup from "./Popup";

interface SortProps {}

const Sort: React.FC<SortProps> = () => {
  return (
    <div className={styles.root}>
      <p>Sort</p>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
          fill="#13110C"
        ></path>
      </svg>
      <div className={styles.popup}>
        <Popup />
        <Popup />
        <Popup />
      </div>
    </div>
  );
};

export default Sort;
