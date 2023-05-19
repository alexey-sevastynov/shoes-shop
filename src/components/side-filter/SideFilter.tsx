import React from "react";
import styles from "./sideFilter.module.scss";
import PriceSlider from "./PriceSlider";
import Checkbox from "./Checkbox";
import { allCategories } from "../../assets/listAllCategories";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { allColors } from "../../assets/listAllColors";
import { allSize } from "../../assets/listAllSizes";
import { allSeasons } from "../../assets/listAllSeasons";
import { selectTranslations } from "../../redux/slices/i18nSlice";
import {
  selectorSort,
  setColors,
  setSeasons,
  setSizes,
  setTypes,
} from "../../redux/slices/filterSlice";
import { selectorShoesData, showByCategory } from "../../redux/slices/shoes";

interface SideFilterProps {
  onClickCategories?: any;
}

const SideFilter: React.FC<SideFilterProps> = ({ onClickCategories }) => {
  const dispatch = useAppDispatch();

  // const [sizes, setSizes] = React.useState(allSize);
  // const [seasons, setSeasons] = React.useState(allSeasons);

  const t = useAppSelector(selectTranslations);
  const { lang } = useAppSelector((state) => state.i18n);
  const { types, colors, seasons, sizes } = useAppSelector(selectorSort);

  const onHandChangCategory = (index: number) => {
    dispatch(setTypes(index));
  };
  const onHandChangColor = (index: number) => {
    dispatch(setColors(index));
  };
  const onHandChangSize = (index: number) => {
    dispatch(setSizes(index));
  };
  const onHandChangSeason = (index: number) => {
    dispatch(setSeasons(index));
  };

  return (
    <div className={styles.root}>
      <div className={styles.filterGroup}>
        <p>{t.sideFilter.category}</p>
        <span></span>
      </div>
      <div>
        {types.map((obj, id) => (
          <Checkbox
            key={obj.en}
            isCheked={obj.checked}
            checkHandler={() => onHandChangCategory(id)}
            label={lang === "en" ? obj.en : obj.ua}
            index={id}
          />
        ))}
        <button className={styles.btn} onClick={onClickCategories}>
          {t.sideFilter.show}
        </button>
      </div>

      <div className={styles.filterGroup}>
        <p>{t.sideFilter.price}</p>
        <span></span>
      </div>

      <div>
        <PriceSlider valutaText={t.sideFilter.uah} />
        <button className={styles.btn} onClick={onClickCategories}>
          {t.sideFilter.show}
        </button>
      </div>
      <div className={styles.filterGroup}>
        <p>{t.sideFilter.color}</p>
        <span></span>
      </div>
      <div>
        {colors.map((obj, id) => (
          <Checkbox
            key={obj.en}
            isCheked={obj.checked}
            checkHandler={() => onHandChangColor(id)}
            label={lang === "en" ? obj.en : obj.ua}
            index={id}
          />
        ))}
        <button className={styles.btn} onClick={onClickCategories}>
          {t.sideFilter.show}
        </button>
      </div>
      <div className={styles.filterGroup}>
        <p>{t.sideFilter.size}</p>
        <span></span>
      </div>
      <div>
        {sizes.map((size, id) => (
          <Checkbox
            key={size.name}
            isCheked={size.checked}
            checkHandler={() => onHandChangSize(id)}
            label={size.name}
            index={id}
          />
        ))}

        <button className={styles.btn} onClick={onClickCategories}>
          {t.sideFilter.show}
        </button>
      </div>
      <div className={styles.filterGroup}>
        <p>{t.sideFilter.season}</p>
        <span></span>
      </div>
      <div>
        {seasons.map((obj, id) => (
          <Checkbox
            key={obj.en}
            isCheked={obj.checked}
            checkHandler={() => onHandChangSeason(id)}
            label={lang === "en" ? obj.en : obj.ua}
            index={id}
          />
        ))}

        <button className={styles.btn} onClick={onClickCategories}>
          {t.sideFilter.show}
        </button>
      </div>
    </div>
  );
};

export default SideFilter;
