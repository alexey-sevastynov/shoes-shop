import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectorBasket } from "../../redux/slices/basketSlice";
import { selectorFavorite } from "../../redux/slices/favoriteSlice";

type HeaderMenuProps = {};

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  const { totalCount } = useAppSelector(selectorBasket);
  const { itemsFavorite } = useAppSelector(selectorFavorite);

  return (
    <div className={styles.blockTools}>
      <div className={styles.basket}>
        <Link to="/cart">
          <svg
            width="20"
            height="22"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8591 17.5045L15.6843 16.125H0.308101L0.12408 17.5779C0.11053 17.6847 0.143489 17.7922 0.2149 17.8729C0.285945 17.9537 0.388484 18 0.49615 18H15.4962C15.4991 18.0004 15.5016 18.0002 15.5035 18C15.7108 18 15.8785 17.8321 15.8785 17.625C15.8785 17.5829 15.8719 17.5424 15.8591 17.5045Z"
              fill="black"
            ></path>
            <path
              d="M14.2023 4.41709C14.1761 4.22959 14.0186 4.09082 13.8311 4.09082H10.8723V6.74958H11.3711C11.5773 6.74958 11.7461 6.91833 11.7461 7.12458C11.7461 7.33083 11.5773 7.49958 11.3711 7.49958H9.87109C9.66485 7.49958 9.49609 7.33083 9.49609 7.12458C9.49609 6.91833 9.66485 6.74958 9.87109 6.74958H10.1223V4.09082H5.86985V6.74958H6.12109C6.32734 6.74958 6.49609 6.91833 6.49609 7.12458C6.49609 7.33083 6.32734 7.49958 6.12109 7.49958H4.62109C4.41485 7.49958 4.24609 7.33083 4.24609 7.12458C4.24609 6.91833 4.41485 6.74958 4.62109 6.74958H5.11985V4.09082H2.16109C1.97359 4.09082 1.8161 4.22959 1.78985 4.41709L0.402344 15.3746H15.5898L14.2023 4.41709Z"
              fill="black"
            ></path>
            <path
              d="M5.87012 2.87624C5.87012 1.70249 6.82636 0.75 7.99636 0.75C9.16636 0.75 10.1226 1.70249 10.1226 2.87624V4.09124H10.8726V2.87624C10.8726 1.29 9.5826 0 7.99636 0C6.41012 0 5.12012 1.29 5.12012 2.87624V4.09124H5.87012V2.87624Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        {totalCount === 0 ? null : (
          <div className={styles.circle}>{totalCount}</div>
        )}
      </div>

      <div className={styles.favorite}>
        <Link to="/favorite">
          <svg
            width="20"
            height="22"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1539 2.13074C15.3274 1.32086 14.2324 0.875 13.0715 0.875C11.9106 0.875 10.8157 1.32086 9.98767 2.13147L9.00073 3.10394L8.01233 2.13074C7.18543 1.32086 6.09082 0.875 4.92975 0.875C3.76575 0.875 2.6695 1.32086 1.84149 2.13184C1.01587 2.9472 0.561768 4.03082 0.562501 5.18311C0.563416 6.33337 1.0177 7.41406 1.84186 8.22577L8.73761 15.0172C8.81067 15.0891 8.9057 15.125 9.00073 15.125C9.09595 15.125 9.1908 15.0891 9.26404 15.0172L16.1543 8.22614C16.9812 7.41443 17.4368 6.33374 17.4375 5.18311C17.4382 4.03064 16.9827 2.94684 16.1539 2.13074Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        {itemsFavorite.length === 0 ? null : (
          <div className={styles.circle}>{itemsFavorite.length}</div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
