import React from "react";
import styles from "./favorite.module.scss";
import FavoriteItem from "./FavoriteItem";
import { useAppSelector } from "../../redux/hook";
import { selectorFavorite } from "../../redux/slices/favoriteSlice";

interface FavoriteProps {}

const Favorite: React.FC<FavoriteProps> = () => {
  const { itemsFavorite } = useAppSelector(selectorFavorite);
  return (
    <div className={styles.root}>
      <p className={styles.title}>Список бажаних товарів</p>
      {itemsFavorite.length !== 0 ? (
        <div className={styles.listItem}>
          {itemsFavorite.map((item) => (
            <FavoriteItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p>Список бажаних товарів порожній</p>
      )}
    </div>
  );
};

export default Favorite;
