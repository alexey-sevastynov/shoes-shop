import React from "react";
import ItemCard from "../item-card/ItemCard";
import styles from "./items.module.scss";

interface ItemsProps {}

const Items: React.FC<ItemsProps> = () => {
  return (
    <div className={styles.root}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default Items;
