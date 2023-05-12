import React from "react";
import styles from "./favorite.module.scss";
import toCart from "../../assets/image/cart.png";
import del from "../../assets/image/remove.png";

interface FavoriteItemProps {}

const FavoriteItem: React.FC<FavoriteItemProps> = () => {
  return (
    <div className={styles.item}>
      <img
        src="https://respect-shoes.com.ua/image/cache/data/products/02422-226-STONE/02422-226-STONE-1-205x205.jpg"
        alt="shoe"
      />

      <div className={styles.itemIcon}>
        <img src={toCart} alt="cart" width={30} height={30} />
        <img src={del} alt="del" width={30} height={30} />
        {/* <span className={styles.showDel}>Видалити</span>
        <span className={styles.showCart}>До кошика</span> */}
      </div>
      <p className={styles.itemName}>Артикул: 02422 - 220 BLACK</p>
      <div className={styles.itemPrice}>
        <span>3,990 uah</span>
        <p>3,392 uah</p>
      </div>
    </div>
  );
};

export default FavoriteItem;
