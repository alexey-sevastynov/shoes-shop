import React from "react";
import styles from "./basket.module.scss";

interface CardBasket {}

const CardBasket: React.FC<CardBasket> = () => {
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
            Артикул: <button>02422 - 220 BLACK</button>
          </span>
          <div>
            <span>Розмір: 39</span>
          </div>
        </div>
        <div className={styles.count}>
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </div>
        <p className={styles.price}>Ціна: 3,990 грн</p>
        <div className={styles.btnRemove}>
          <div className={styles.close} />
          <p>remove goods</p>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
