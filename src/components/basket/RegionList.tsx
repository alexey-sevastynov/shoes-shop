import React from "react";
import styles from "./basket.module.scss";

interface RegionProps {}

const RegionList: React.FC<RegionProps> = () => {
  return (
    <ul className={styles.popup}>
      <li className={styles.active}>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
      <li>Dnipropetrovska</li>
    </ul>
  );
};

export default RegionList;
