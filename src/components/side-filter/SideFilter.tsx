import React from "react";
import styles from "./sideFilter.module.scss";
import PriceSlider from "./PriceSlider";

interface SideFilterProps {}

const SideFilter: React.FC<SideFilterProps> = () => {
  const [input, setInput] = React.useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const enterNumber = e.currentTarget.value;
    setInput(enterNumber);
  };
  return (
    <div className={styles.root}>
      <div className={styles.filterGroup}>
        <p>ЦІНА</p>
        <span></span>
      </div>
      <div>
        <PriceSlider />
        <button className={styles.btn}>Переглянути</button>
      </div>
      <div className={styles.filterGroup}>
        <p>ЦІНА</p>
        <span></span>
      </div>
      <div className={styles.filterGroup}>
        <p>ЦІНА</p>
        <span></span>
      </div>
    </div>
  );
};

export default SideFilter;
