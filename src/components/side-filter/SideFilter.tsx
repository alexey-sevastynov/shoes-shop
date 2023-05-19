import React from "react";
import styles from "./sideFilter.module.scss";
import PriceSlider from "./PriceSlider";
import Checkbox from "./Checkbox";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectTranslations } from "../../redux/slices/i18nSlice";
import {
  selectorSort,
  setColors,
  setSeasons,
  setSizes,
  setTypes,
} from "../../redux/slices/filterSlice";
import { selectorShoesData } from "../../redux/slices/shoes";

type ShowTransleteItem = {
  en: string;
  ua: string;
};

interface SideFilterProps {
  onClickCategories?: any;
}

const SideFilter: React.FC<SideFilterProps> = ({ onClickCategories }) => {
  const dispatch = useAppDispatch();

  const t = useAppSelector(selectTranslations);
  const { lang } = useAppSelector((state) => state.i18n);
  const { types, colors, seasons, sizes } = useAppSelector(selectorSort);
  const { maxPrice, minPrice } = useAppSelector(selectorShoesData);

  const [toggleCategory, setTogglecategory] = React.useState(false);
  const [togglePrice, setTogglePrice] = React.useState(false);
  const [toggleColor, setToggleColor] = React.useState(false);
  const [toggleSize, setToggleSize] = React.useState(false);
  const [toggleSeason, setToggleSeason] = React.useState(false);

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

  const showTranslete = (obj: ShowTransleteItem) => {
    const { ua, en } = obj;
    return lang === "ua" ? ua : en;
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.filterGroup}
        onClick={() => setTogglecategory(!toggleCategory)}
      >
        <p>{t.sideFilter.category}</p>
        <div className={styles.filterActive}>
          {types
            .filter((category) => category.checked === true)
            .map((categoryName) => (
              <p key={categoryName.en}>{showTranslete(categoryName)}</p>
            ))}
        </div>
        <span></span>
      </div>

      {toggleCategory && (
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
      )}
      <div
        className={styles.filterGroup}
        onClick={() => setTogglePrice(!togglePrice)}
      >
        <p>{t.sideFilter.price}</p>
        <div className={styles.filterActive}>
          <p>от</p>
          <p className={styles.green}>{minPrice}</p>
          <p>до</p>
          <p className={styles.red}>{maxPrice}</p>
        </div>
        <span></span>
      </div>
      {togglePrice && (
        <div>
          <PriceSlider valutaText={t.sideFilter.uah} />
          <button className={styles.btn} onClick={onClickCategories}>
            {t.sideFilter.show}
          </button>
        </div>
      )}
      <div
        className={styles.filterGroup}
        onClick={() => setToggleColor(!toggleColor)}
      >
        <p>{t.sideFilter.color}</p>
        <div className={styles.filterActive}>
          {colors
            .filter((color) => color.checked === true)
            .map((colorName) => (
              <p key={colorName.en}>{showTranslete(colorName)}</p>
            ))}
        </div>
        <span></span>
      </div>
      {toggleColor && (
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
      )}
      <div
        className={styles.filterGroup}
        onClick={() => setToggleSize(!toggleSize)}
      >
        <p>{t.sideFilter.size}</p>
        <div className={styles.filterActive}>
          {sizes
            .filter((size) => size.checked === true)
            .map((sizeName) => (
              <p key={sizeName.name}>{sizeName.name}</p>
            ))}
        </div>
        <span></span>
      </div>
      {toggleSize && (
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
      )}
      <div
        className={styles.filterGroup}
        onClick={() => setToggleSeason(!toggleSeason)}
      >
        <p>{t.sideFilter.season}</p>
        <div className={styles.filterActive}>
          {seasons
            .filter((season) => season.checked === true)
            .map((seasonName) => (
              <p key={seasonName.en}>{showTranslete(seasonName)}</p>
            ))}
        </div>
        <span></span>
      </div>
      {toggleSeason && (
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
      )}
    </div>
  );
};

export default SideFilter;
