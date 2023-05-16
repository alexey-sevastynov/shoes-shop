import React from "react";
import styles from "./basket.module.scss";
import Sort from "../sort/Sort";
import RegionList from "./RegionList";
import CityList from "./CityList";
import BrancesNpList from "./BrancesNpList";

interface DeliveryProps {
  t: any;
}

const Delivery: React.FC<DeliveryProps> = ({ t }) => {
  return (
    <div className={styles.delivery}>
      <div className={styles.header}>
        <div className={styles.posNum}>2</div>
        <p>{t.basket.delivery}</p>
      </div>
      <div className={styles.region}>
        <p>{t.basket.region}</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
        {/* <RegionList /> */}
      </div>
      <div className={styles.city}>
        <p>{t.basket.city} *</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
        {/* <CityList /> */}
      </div>
      <div className={styles.deliveryMethod}>
        <p>Спосіб доставки *</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
        {/* <ul className={styles.popup}>
          <li className={styles.active}>Віділення Нової пошти</li>
          <li>Адресна доставка</li>
        </ul> */}
      </div>
      <div className={styles.branches}>
        <p>Введіть номер складу *</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
        {/* <BrancesNpList /> */}
      </div>
      <div className={styles.adress}>
        <input type="text" placeholder="Adress" />
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
      </div>
      <div className={styles.PriceMethod}>
        <p>Спосіб оплати *</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 6.35589L6.00042 0.699219L11.6571 6.35589L10.7144 7.29922L6.00042 2.58455L1.28642 7.29922L0.34375 6.35589Z"
            fill="#13110C"
          ></path>
        </svg>
        {/* <ul className={styles.popup}>
          <li className={styles.active}>Віділення Нової пошти</li>
          <li>Адресна доставка</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Delivery;
