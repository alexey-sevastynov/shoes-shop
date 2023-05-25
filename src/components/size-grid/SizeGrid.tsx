import React from "react";
import styles from "./sizeGrid.module.scss";
import { showGridSize } from "../../assets/shoeGridSize";

interface SizeGridProps {
  setTogglePopupSize: any;
}

const SizeGrid: React.FC<SizeGridProps> = ({ setTogglePopupSize }) => {
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <p>Жіноча розмірна сітка взуття:</p>
        <div
          className={styles.close}
          onClick={() => setTogglePopupSize(false)}
        />
      </div>
      {showGridSize.map((item) => (
        <div key={item.length} className={styles.table}>
          <div>{item.length}</div>
          <div>{item.sizeEU}</div>
          <div>{item.sizeUS}</div>
          <div>{item.sizeUK}</div>
        </div>
      ))}
    </div>
  );
};

export default SizeGrid;
