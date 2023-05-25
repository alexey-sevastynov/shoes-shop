import React from "react";
import styles from "./sizeGrid.module.scss";

interface SizeGridProps {}

const SizeGrid: React.FC<SizeGridProps> = () => {
  return <div className={styles.root}>SizeGrid</div>;
};

export default SizeGrid;
