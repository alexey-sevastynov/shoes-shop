import React from "react";
import styles from "./basketPopup.module.scss";
import CardBasket from "../basket/CardBasket";
import { useAppSelector } from "../../redux/hook";
import { selectorBasket } from "../../redux/slices/basketSlice";
import { selectTranslations } from "../../redux/slices/i18nSlice";

import { Link } from "react-router-dom";

interface BasketPopupProps {
  setTogglePopupBaket: any;
}

const BasketPopup: React.FC<BasketPopupProps> = ({ setTogglePopupBaket }) => {
  const t = useAppSelector(selectTranslations);
  const { items } = useAppSelector(selectorBasket);

  return (
    <div className={styles.basketPopup}>
      <p className={styles.title}>Basket</p>
      <div
        className={styles.close}
        onClick={() => setTogglePopupBaket(false)}
      />
      {items.map((item) => (
        <CardBasket key={Math.random()} t={t} {...item} />
      ))}

      <div className={styles.btn}>
        <button>
          <Link to="/cart">Оформити покупку</Link>
        </button>

        <button onClick={() => setTogglePopupBaket(false)}>
          Продовжити покупку
        </button>
      </div>
    </div>
  );
};

export default BasketPopup;
