import React from "react";
import styles from "./itemCard.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectorShoesData, setId, setObjShoe } from "../../redux/slices/shoes";
import {
  addFavorite,
  selectorFavorite,
  toggleFavorite,
} from "../../redux/slices/favoriteSlice";

interface ItemCardProps {
  article?: string;
  category?: string;
  color?: { ua: string; en: string };
  country?: { ua: string; en: string };
  heelHight?: { ua: string; en: string };
  id?: number;
  imageURL?: string[];
  imageURLMain?: string[];
  material?: { ua: string; en: string };
  materialBottom?: { ua: string; en: string };
  name?: { ua: string; en: string };
  price?: number;
  priceSale?: number;
  sale?: boolean;
  season?: { ua: string; en: string };
}

const ItemCard: React.FC<ItemCardProps> = ({
  article,
  imageURL,
  imageURLMain,
  price,
  priceSale,
  sale,
  id,
  name,
}) => {
  const { items } = useAppSelector(selectorShoesData);
  const { itemsFavorite } = useAppSelector(selectorFavorite);
  const dispatch = useAppDispatch();

  const isTrue = itemsFavorite
    ? itemsFavorite.find((obj) => obj.id === id)
    : false;

  const firstImg = !imageURLMain ? "" : imageURLMain[0];
  const secondImg = !imageURLMain ? "" : imageURLMain[1];

  const onClickId = (id: number) => {
    dispatch(setId(id));

    const item = items.find((item) => item.id === id);

    if (!item) {
      const obj = {
        article: "",
        category: "",
        color: { ua: "", en: "" },
        country: { ua: "", en: "" },
        heelHight: { ua: "", en: "" },
        id: 0,
        imageURL: [],
        imageURLMain: [],
        material: { ua: "", en: "" },
        materialBottom: { ua: "", en: "" },
        name: { ua: "", en: "" },
        price: 0,
        priceSale: 0,
        sale: false,
        season: { ua: "", en: "" },
        sizes: [36, 37, 38, 39, 40, 41],
      };
      dispatch(setObjShoe(obj));
    } else {
      dispatch(setObjShoe(item));
    }
  };

  const onClickAddFavorite = () => {
    const obj = {
      article: article ? article : "",
      id: id ? id : 0,
      imageURL: imageURL ? imageURL : [""],
      name: name ? name : { ua: "", en: "" },
      priceSale: priceSale ? priceSale : 0,
      sale: false,
      price: price ? price : 0,
    };

    dispatch(toggleFavorite(obj));
  };

  const showPrice = sale ? (
    <div className={styles.sale}>
      <p>
        {priceSale} <span>uah</span>
      </p>
      <p>
        {price} <span>uah</span>
      </p>
    </div>
  ) : (
    <p>
      {price} <span>uah</span>
    </p>
  );

  return (
    <div className={styles.root}>
      <Link to="/description">
        <div className={styles.changePhotos}>
          <div className={styles.changePhoto1}>
            <img src={firstImg} onClick={() => onClickId(!id ? 0 : id)} />
          </div>
          <div className={styles.changePhoto2}>
            <img src={secondImg} />
          </div>
        </div>
      </Link>

      <svg
        onClick={onClickAddFavorite}
        width="20"
        height="22"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1539 2.13074C15.3274 1.32086 14.2324 0.875 13.0715 0.875C11.9106 0.875 10.8157 1.32086 9.98767 2.13147L9.00073 3.10394L8.01233 2.13074C7.18543 1.32086 6.09082 0.875 4.92975 0.875C3.76575 0.875 2.6695 1.32086 1.84149 2.13184C1.01587 2.9472 0.561768 4.03082 0.562501 5.18311C0.563416 6.33337 1.0177 7.41406 1.84186 8.22577L8.73761 15.0172C8.81067 15.0891 8.9057 15.125 9.00073 15.125C9.09595 15.125 9.1908 15.0891 9.26404 15.0172L16.1543 8.22614C16.9812 7.41443 17.4368 6.33374 17.4375 5.18311C17.4382 4.03064 16.9827 2.94684 16.1539 2.13074Z"
          fill={isTrue ? "red" : "black"}
        ></path>
      </svg>
      <div className={styles.footer}>
        <span>Артикул: {article}</span>
        {showPrice}
      </div>
    </div>
  );
};

export default ItemCard;
