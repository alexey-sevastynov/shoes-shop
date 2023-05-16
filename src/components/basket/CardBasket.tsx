import React from "react";
import styles from "./basket.module.scss";

interface CardBasket {
  t: any;
}

const CardBasket: React.FC<CardBasket> = ({ t }) => {
  return (
    <div className={styles.basketCard}>
      <img
        src="https://respect-shoes.com.ua/image/cache/data/products/02422-220-BLACK/02422-220-BLACK-1-205x205.jpg"
        alt="shoe"
      />
      <div className={styles.basketCardDescription}>
        <p className={styles.title}>Жіночі босоніжки Respect чорний</p>
        <div>
          <span>
            {t.basket.article}: <button>02422 - 220 BLACK</button>
          </span>
          <div>
            <span> {t.basket.size}: 39</span>
          </div>
        </div>
        <div className={styles.count}>
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </div>
        <p className={styles.price}>
          {t.basket.price}: 3,990 {t.basket.uah}
        </p>
        <div className={styles.btnRemove}>
          <div className={styles.close} />
          <p> {t.basket.remove}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
