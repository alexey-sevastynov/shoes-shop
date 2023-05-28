import React from "react";
import styles from "./favorite.module.scss";
import toCart from "../../assets/image/cart.png";
import del from "../../assets/image/remove.png";
import { use } from "i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { removeFavorite } from "../../redux/slices/favoriteSlice";
import { Link } from "react-router-dom";
import { selectorShoesData, setId, setObjShoe } from "../../redux/slices/shoes";

interface FavoriteItemProps {
  article?: string;
  id: number;
  imageURL?: string[];
  name?: { ua: string; en: string };
  sale: boolean;
  price: number;
  priceSale: number;
  isFavorite?: boolean;
  t: any;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  article,
  id,
  imageURL,
  name,
  price,
  priceSale,
  sale,
  isFavorite,
  t,
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectorShoesData);

  const onClickRemove = () => {
    const objCurrent = {
      article,
      id,
      imageURL,
      name,
      price,
      priceSale,
      sale,
      isFavorite: isFavorite ? isFavorite : false,
    };
    dispatch(removeFavorite(objCurrent));
  };

  const onClickId = (id: number) => {
    dispatch(setId(id));

    const item = items.find((item) => item.id === id);
    console.log(item);

    if (!item) {
      const obj = {
        article: "",
        category: "",
        color: { ua: "", en: "" },
        country: { ua: "", en: "" },
        heelHight: { ua: "", en: "" },
        id: 0,
        imageURL: [],
        imageURLMain: [],
        material: { ua: "", en: "" },
        materialBottom: { ua: "", en: "" },
        name: { ua: "", en: "" },
        price: 0,
        priceSale: 0,
        sale: false,
        season: { ua: "", en: "" },
        sizes: [36, 37, 38, 39, 40, 41],
      };
      dispatch(setObjShoe(obj));
    } else {
      dispatch(setObjShoe(item));
    }
  };
  return (
    <div className={styles.item}>
      <Link to="/description">
        <img
          className={styles.itemImage}
          src={imageURL ? imageURL[0] : ""}
          alt="shoe"
          onClick={() => onClickId(id)}
        />
      </Link>

      <div className={styles.itemIcon}>
        <Link to="/description">
          <img
            src={toCart}
            alt="cart"
            width={30}
            height={30}
            onClick={() => onClickId(id)}
          />
        </Link>

        <img
          src={del}
          alt="del"
          width={30}
          height={30}
          onClick={onClickRemove}
        />
        {/* <span className={styles.showDel}>Видалити</span>
        <span className={styles.showCart}>До кошика</span> */}
      </div>
      <p className={styles.itemName}>
        {t.description.article}: {article}
      </p>
      <div className={styles.itemPrice}>
        <span>
          {price} {t.uah}
        </span>
        <p>
          {priceSale} {t.uah}
        </p>
      </div>
    </div>
  );
};

export default FavoriteItem;
