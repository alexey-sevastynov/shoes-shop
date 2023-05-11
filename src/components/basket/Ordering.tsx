import React from "react";
import styles from "./basket.module.scss";

interface OrderingProps {}

const Ordering: React.FC<OrderingProps> = () => {
  return (
    <div className={styles.ordering}>
      <div className={styles.header}>
        <div className={styles.posNum}>1</div>
        <p>Оформлення замовлення</p>
      </div>
      <div className={styles.inputName}>
        <input type="text" placeholder="Прізвище *" />
        <input type="text" placeholder="Ім'я *" />
        <input type="text" placeholder="По батькові *" />
      </div>
      <div className={styles.inputPhone}>
        <input type="text" placeholder="Контактний телефон *" />
      </div>
      <div className={styles.inputChexbox}>
        <input type="checkbox" id="isCall" name="isCall" />
        <label htmlFor="isCall">
          Не турбувати мене дзвінком для підтвердження замовлення
        </label>
      </div>
      <div className={styles.inputEmail}>
        <input type="text" placeholder="Email *" />
      </div>
      <span className={styles.emailLabel}>
        для відстеження стану замовлення
      </span>
    </div>
  );
};

export default Ordering;
