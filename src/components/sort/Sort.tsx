import React from "react";
import styles from "./sort.module.scss";
import Popup from "./Popup";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectorSort, setSort } from "../../redux/slices/filterSlice";

export type SortItem = {
  sortProperty: "rating" | "priceSale" | "-priceSale";
  en: string;
  ua: string;
};

const sortNames: SortItem[] = [
  { sortProperty: "rating", en: "popular (DESC)", ua: "по популярності" },
  {
    sortProperty: "priceSale",
    en: "price (DESC)",
    ua: "від дорогих до дешевих",
  },
  {
    sortProperty: "-priceSale",
    en: "price (ASC)",
    ua: "від дешевих до дорогих",
  },
];

interface SortProps {}

const Sort: React.FC<SortProps> = () => {
  const dispatch = useAppDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const { sort } = useAppSelector(selectorSort);
  const { lang } = useAppSelector((state) => state.i18n);

  const onClickSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    // class -> componentDidUnmount
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const currentSort = lang === "ua" ? sort.ua : sort.en;
  const curSortName = currentSort.split("").slice(0, 11).join("");

  return (
    <div className={styles.root} ref={sortRef}>
      <div className={styles.sort} onClick={() => setIsVisible(!isVisible)}>
        <p>{curSortName} . . .</p>
        <svg
          className={isVisible ? styles.active : null}
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
      {isVisible && (
        <div className={styles.popup}>
          {sortNames.map((obj) => (
            <Popup
              key={obj.en}
              {...obj}
              onClick={() => onClickSort(obj)}
              active={sort.sortProperty === obj.sortProperty}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
