import React from "react";
import styles from "./favorite.module.scss";
import FavoriteItem from "./FavoriteItem";

interface FavoriteProps {}

const Favorite: React.FC<FavoriteProps> = () => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>Список бажаних товарів</p>
      <div className={styles.listItem}>
        <FavoriteItem />
        <FavoriteItem />
      </div>
    </div>
  );
};

export default Favorite;
