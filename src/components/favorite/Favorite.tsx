import React from "react";
import styles from "./favorite.module.scss";
import FavoriteItem from "./FavoriteItem";
import { useAppSelector } from "../../redux/hook";
import { selectorFavorite } from "../../redux/slices/favoriteSlice";
import { selectTranslations } from "../../redux/slices/i18nSlice";

interface FavoriteProps {}

const Favorite: React.FC<FavoriteProps> = () => {
  const t = useAppSelector(selectTranslations);
  const { itemsFavorite } = useAppSelector(selectorFavorite);
  return (
    <div className={styles.root}>
      <p className={styles.title}>{t.favorite.listFavorites}</p>
      {itemsFavorite.length !== 0 ? (
        <div className={styles.listItem}>
          {itemsFavorite.map((item) => (
            <FavoriteItem key={item.id} {...item} t={t} />
          ))}
        </div>
      ) : (
        <p>{t.favorite.listIsEmpty}</p>
      )}
    </div>
  );
};

export default Favorite;
