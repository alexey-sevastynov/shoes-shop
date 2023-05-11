import React from "react";
import styles from "./sort.module.scss";

interface PopupProps {}

const Popup: React.FC<PopupProps> = () => {
  return (
    <div className={styles.popupItem}>
      <p>За замовчуванням</p>
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.795 0.564412C13.5216 0.291029 13.0784 0.291029 12.805 0.564412L4.4186 8.95093L1.19499 5.72732C0.921635 5.45394 0.478447 5.45397 0.205037 5.72732C-0.0683457 6.00068 -0.0683457 6.44387 0.205037 6.71725L3.92362 10.4358C4.1969 10.7091 4.64041 10.7089 4.91358 10.4358L13.795 1.55437C14.0684 1.28101 14.0683 0.837795 13.795 0.564412Z"
          fill="black"
        ></path>
      </svg>
    </div>
  );
};

export default Popup;
