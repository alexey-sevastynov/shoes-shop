import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  addItem,
  minusItem,
  plusItem,
  removeItem,
  selectorBasket,
} from "../../redux/slices/basketSlice";

interface CardBasket {
  t?: any;
  article?: string;
  id?: number;
  imageURL?: string[];
  name?: { ua: string; en: string };
  priceSale?: number;
  sizes?: number;
  count?: any;
  totalPrice?: number;
}

const CardBasket: React.FC<CardBasket> = ({
  t,

  article,
  id,
  imageURL,
  name,
  priceSale,
  sizes,
  count,
  totalPrice,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    const obj = {
      id: id ? id : 0,
      sizes: sizes ? sizes : 36,
    };
    if (window.confirm(`Do you want delete?${id} - id, ${sizes} - sizes`)) {
      dispatch(removeItem(obj));
    }
  };

  const onClickMinus = () => {
    const obj = {
      id: id ? id : 0,
      sizes: sizes ? sizes : 36,
    };
    dispatch(minusItem(obj));
  };
  const onClickPlus = () => {
    const obj = {
      id: id ? id : 0,
      sizes: sizes ? sizes : 36,
    };
    dispatch(plusItem(obj));
  };

  return (
    <div className={styles.basketCard}>
      <img src={!imageURL ? "" : imageURL[0]} alt="shoe" />
      <div className={styles.basketCardDescription}>
        <p className={styles.title}>{name?.en}</p>
        <div>
          <span>
            {t.basket.article}: <button>{article}</button>
          </span>
          <div>
            <span>
              {t.basket.size}: {sizes}
            </span>
          </div>
        </div>
        <div className={styles.count}>
          <button onClick={onClickMinus}>-</button>
          <input type="number" value={count} />
          <button onClick={onClickPlus}>+</button>
        </div>
        <p className={styles.price}>
          {t.basket.price}: {totalPrice} {t.basket.uah}
        </p>
        <div className={styles.btnRemove} onClick={onClickRemove}>
          <div className={styles.close} />
          <p> {t.basket.remove}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
