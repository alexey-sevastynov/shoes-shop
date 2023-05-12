import React from "react";
import styles from "./basket.module.scss";

type CityListProps = {};

const CityList: React.FC<CityListProps> = () => {
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

export default CityList;
