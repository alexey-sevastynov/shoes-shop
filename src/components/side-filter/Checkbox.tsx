import React from "react";
import styles from "./sideFilter.module.scss";
import "./priceSlider.css";

interface CheckboxProps {
  isCheked?: any;
  label?: string;
  checkHandler?: any;
  index: any;
  key?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isCheked,
  checkHandler,
  label,
  index,
}) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.flag}></div>
      <input
        type="checkbox"
        id={`checkbox - ${index}`}
        value={isCheked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;
