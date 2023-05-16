import React from "react";
import styles from "./basket.module.scss";

interface OrderingProps {
  t: any;
}

const Ordering: React.FC<OrderingProps> = ({ t }) => {
  return (
    <div className={styles.ordering}>
      <div className={styles.header}>
        <div className={styles.posNum}>1</div>
        <p>{t.basket.ordering}</p>
      </div>
      <div className={styles.inputName}>
        <input type="text" placeholder={`${t.basket.surName} *`} />
        <input type="text" placeholder={`${t.basket.name} *`} />
        <input type="text" placeholder={`${t.basket.paternalName} *`} />
      </div>
      <div className={styles.inputPhone}>
        <input type="text" placeholder={`${t.basket.phone} *`} />
      </div>
      <div className={styles.inputChexbox}>
        <input type="checkbox" id="isCall" name="isCall" />
        <label htmlFor="isCall">{t.basket.notCall}</label>
      </div>
      <div className={styles.inputEmail}>
        <input type="text" placeholder="Email *" />
      </div>
      <span className={styles.emailLabel}>{t.basket.followOrdering}</span>
    </div>
  );
};

export default Ordering;
