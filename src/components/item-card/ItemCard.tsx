import React from "react";
import styles from "./itemCard.module.scss";

interface ItemCardProps {}

const ItemCard: React.FC<ItemCardProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.changePhotos}>
        <div className={styles.changePhoto1}>
          <img src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-386x515.jpg" />
        </div>
        <div className={styles.changePhoto2}>
          <img src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-3-386x515.jpg" />
        </div>
      </div>

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
      <div className={styles.footer}>
        <span>Артикул: IS73-153225</span>
        <p>
          1759 <span>uah</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
