import React from "react";
import styles from "./basket.module.scss";

type BrancesNpListProps = {};

const BrancesNpList: React.FC<BrancesNpListProps> = () => {
  return (
    <ul className={styles.popup}>
      <li className={styles.active}>1 brances</li>
      <li>1 brances</li>
      <li>1 brances</li>
      <li>1 brances</li>
      <li>1 brances</li>
      <li>1 brances</li>
    </ul>
  );
};

export default BrancesNpList;
