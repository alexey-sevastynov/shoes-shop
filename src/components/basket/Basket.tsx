import React from "react";
import styles from "./basket.module.scss";
import CardBasket from "./CardBasket";
import Ordering from "./Ordering";
import Delivery from "./Delivery";
import Comment from "./Comment";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>Basket</p>
      <div className={styles.basketCards}>
        <div className={styles.basketCardsCol_1}>
          <CardBasket />
          <CardBasket />
          <CardBasket />
          <CardBasket />
          <div className={styles.price}>
            <div className={styles.priceCol_1}>
              <p>Товарів:</p>
              <span>7</span>
            </div>
            <div className={styles.priceCol_2}>
              <p>Сума:</p>
              <span>26,738 грн</span>
            </div>
          </div>
        </div>
        <div className={styles.basketCardsCol_2}>
          <Ordering />
          <Delivery />
          <Comment />
          <div className={styles.agreement}>
            <div className={styles.header}>
              <div className={styles.posNum}>4</div>
              <p>Угода користувача</p>
            </div>
            <div>
              <input type="checkbox" name="agreement" />
              <label htmlFor="agreement">
                Я приймаю <button>Угоду користувача</button>
              </label>
            </div>
          </div>
          <button className={styles.btnForm}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
