import React from "react";
import styles from "./description.module.scss";

type DescrptionProps = {};

const Descrption: React.FC<DescrptionProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Жіночі туфлі Respect бежеві</div>
      <div className={styles.subtitle}>
        <p>Артикул: IS73-153225</p>
      </div>
      <p>Сезон: Літо</p>
      <p>Колекція: Нова колекція</p>
      <p>Колір: бежевий</p>
      <p>Підклад: без підкладки</p>
      <p>Матеріал підошви: Туніт</p>
      <p>Висота каблука: низький</p>
      <p>Країна-виробник: Китай</p>
      <div className={styles.price}>
        1,759 <span>uah</span>
      </div>

      <div className={styles.size}>
        <p>Оберіть розмір</p>
        <button>Розмірна сітка</button>
      </div>

      <div className={styles.possibleSizes}>
        <button>37</button>
        <button>38</button>
        <button>39</button>
        <button>40</button>
      </div>

      <div className={styles.btnToBasket}>
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0314 17.1502L15.864 15.8281H1.12843L0.95208 17.2205C0.939095 17.3228 0.970681 17.4258 1.03912 17.5032C1.1072 17.5806 1.20547 17.625 1.30865 17.625H15.6836C15.6865 17.6254 15.6889 17.6252 15.6907 17.625C15.8893 17.625 16.05 17.4641 16.05 17.2656C16.05 17.2253 16.0437 17.1865 16.0314 17.1502Z"
            fill="white"
          ></path>
          <path
            d="M14.4437 4.6076C14.4186 4.42791 14.2677 4.29492 14.088 4.29492H11.2525V6.8429H11.7305C11.9281 6.8429 12.0898 7.00462 12.0898 7.20228C12.0898 7.39993 11.9281 7.56165 11.7305 7.56165H10.293C10.0953 7.56165 9.93359 7.39993 9.93359 7.20228C9.93359 7.00462 10.0953 6.8429 10.293 6.8429H10.5337V4.29492H6.45844V6.8429H6.69922C6.89687 6.8429 7.05859 7.00462 7.05859 7.20228C7.05859 7.39993 6.89687 7.56165 6.69922 7.56165H5.26172C5.06407 7.56165 4.90234 7.39993 4.90234 7.20228C4.90234 7.00462 5.06407 6.8429 5.26172 6.8429H5.73969V4.29492H2.90422C2.72453 4.29492 2.5736 4.42791 2.54844 4.6076L1.21875 15.1085H15.7734L14.4437 4.6076Z"
            fill="white"
          ></path>
          <path
            d="M6.45703 3.1314C6.45703 2.00655 7.37343 1.09375 8.49468 1.09375C9.61593 1.09375 10.5323 2.00655 10.5323 3.1314V4.29577H11.2511V3.1314C11.2511 1.61125 10.0148 0.375 8.49468 0.375C6.97453 0.375 5.73828 1.61125 5.73828 3.1314V4.29577H6.45703V3.1314Z"
            fill="white"
          ></path>
        </svg>
        <p>ДОДАТИ ДО КОШИКА</p>
      </div>
      <div className={styles.btnToFavorite}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1539 2.13074C15.3274 1.32086 14.2324 0.875 13.0715 0.875C11.9106 0.875 10.8157 1.32086 9.98767 2.13147L9.00073 3.10394L8.01233 2.13074C7.18543 1.32086 6.09082 0.875 4.92975 0.875C3.76575 0.875 2.6695 1.32086 1.84149 2.13184C1.01587 2.9472 0.561768 4.03082 0.562501 5.18311C0.563416 6.33337 1.0177 7.41406 1.84186 8.22577L8.73761 15.0172C8.81067 15.0891 8.9057 15.125 9.00073 15.125C9.09595 15.125 9.1908 15.0891 9.26404 15.0172L16.1543 8.22614C16.9812 7.41443 17.4368 6.33374 17.4375 5.18311C17.4382 4.03064 16.9827 2.94684 16.1539 2.13074Z"
            fill="#13110C"
          ></path>
        </svg>
        <p>Додати в обране</p>
      </div>
    </div>
  );
};

export default Descrption;