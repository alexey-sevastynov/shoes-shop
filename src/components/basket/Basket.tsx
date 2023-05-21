import React from "react";
import styles from "./basket.module.scss";

import CardBasket from "./CardBasket";
import Ordering from "./Ordering";
import Delivery from "./Delivery";
import Comment from "./Comment";

import { selectTranslations } from "../../redux/slices/i18nSlice";
import { useAppSelector } from "../../redux/hook";
import { selectorBasket } from "../../redux/slices/basketSlice";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
  const t = useAppSelector(selectTranslations);
  const { items, totalPrice, totalCount } = useAppSelector(selectorBasket);
  return (
    <div className={styles.root}>
      <p className={styles.title}>{t.basket.basket}</p>
      <div className={styles.basketCards}>
        <div className={styles.basketCardsCol_1}>
          {items.map((item) => (
            <CardBasket t={t} {...item} />
          ))}

          <div className={styles.price}>
            <div className={styles.priceCol_1}>
              <p>{t.basket.goods}:</p>
              <span>{totalCount}</span>
            </div>
            <div className={styles.priceCol_2}>
              <p>{t.basket.summ}:</p>
              <span>{totalPrice} грн</span>
            </div>
          </div>
        </div>
        <div className={styles.basketCardsCol_2}>
          <Ordering t={t} />
          <Delivery t={t} />
          <Comment />
          <div className={styles.agreement}>
            <div className={styles.header}>
              <div className={styles.posNum}>4</div>
              <p>{t.basket.agreement}</p>
            </div>
            <div>
              <input type="checkbox" name="agreement" />
              <label htmlFor="agreement">
                {t.basket.accept} <button>{t.basket.agreement}</button>
              </label>
            </div>
          </div>
          <button className={styles.btnForm}>{t.basket.order}</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
