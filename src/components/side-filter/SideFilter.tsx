import React from "react";
import styles from "./sideFilter.module.scss";

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
        <div className={styles.price}>
          <input type="number" value={input} onChange={onChange} />
          <p>uah</p>
          <span>-</span>
          <input type="number" />
          <p>uah</p>
        </div>
        <input
          type="range"
          id="cowbell"
          name="cowbell"
          min={"100"}
          max={"5000"}
          onChange={onChange}
          value={input}
          step="1"
        />
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
