import React from "react";
import styles from "./sideFilter.module.scss";
import PriceSlider from "./PriceSlider";
import Checkbox from "./Checkbox";

type LabelType = {
  name: string;
  checked: boolean;
};

const allTypes = [
  { name: "ТУФЛІ", checked: false },
  { name: "БАЛЕТКИ", checked: false },
  { name: "КРОСІВКИ", checked: false },
  { name: "КЕДИ", checked: false },
  { name: "БОСОНІЖКИ", checked: false },
  { name: "САНДАЛІ", checked: false },
  { name: "ЧЕРЕВИКИ", checked: false },
  { name: "БОТИЛЬЙОНИ", checked: false },
  { name: "ЧОБОТИ", checked: false },
  { name: "БОТФОРТИ", checked: false },
];

const allColors = [
  { name: "Білий", checked: false },
  { name: "Бежевий", checked: false },
  { name: "Блакитний", checked: false },
  { name: "Жовтий", checked: false },
  { name: "Зелений", checked: false },
  { name: "Коричневий", checked: false },
  { name: "Мульті", checked: false },
  { name: "Рожевий", checked: false },
  { name: "Сірий", checked: false },
  { name: "Синій", checked: false },
  { name: "Фіолетовий", checked: false },
  { name: "Червоний", checked: false },
  { name: "Чорний", checked: false },
];

const allSize = [
  { name: "36", checked: false },
  { name: "37", checked: false },
  { name: "38", checked: false },
  { name: "39", checked: false },
  { name: "40", checked: false },
  { name: "41", checked: false },
];

const allSeason = [
  { name: "ДЕМІ", checked: false },
  { name: "ЗИМА", checked: false },
  { name: "РІК", checked: false },
  { name: "ЛІТО", checked: false },
];

interface SideFilterProps {}

const SideFilter: React.FC<SideFilterProps> = () => {
  const [types, setType] = React.useState(allTypes);
  const [colors, setColors] = React.useState(allColors);
  const [sizes, setSizes] = React.useState(allSize);
  const [seasons, setSeasons] = React.useState(allSeason);

  const onHandChangCategory = (index: number) => {
    setType(
      types.map((type, currentIndex) => {
        return currentIndex === index
          ? { ...type, checked: !type.checked }
          : type;
      })
    );
  };
  const onHandChangColor = (index: number) => {
    setColors(
      colors.map((color, currentIndex) => {
        return currentIndex === index
          ? { ...color, checked: !color.checked }
          : color;
      })
    );
  };
  const onHandChangSize = (index: number) => {
    setSizes(
      sizes.map((size, currentIndex) => {
        return currentIndex === index
          ? { ...size, checked: !size.checked }
          : size;
      })
    );
  };
  const onHandChangSeason = (index: number) => {
    setSeasons(
      seasons.map((season, currentIndex) => {
        return currentIndex === index
          ? { ...season, checked: !season.checked }
          : season;
      })
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.filterGroup}>
        <p>КАТЕГОРІЯ</p>
        <span></span>
      </div>
      <div>
        {allTypes.map((type, id) => (
          <Checkbox
            key={type.name}
            isCheked={type.checked}
            checkHandler={() => onHandChangCategory(id)}
            label={type.name}
            index={id}
          />
        ))}
      </div>

      <div className={styles.filterGroup}>
        <p>ЦІНА</p>
        <span></span>
      </div>

      <div>
        <PriceSlider />
        <button className={styles.btn}>Переглянути</button>
      </div>
      <div className={styles.filterGroup}>
        <p>КОЛІР</p>
        <span></span>
      </div>
      <form>
        {colors.map((color, id) => (
          <Checkbox
            key={color.name}
            isCheked={color.checked}
            checkHandler={() => onHandChangColor(id)}
            label={color.name}
            index={id}
          />
        ))}
        <button className={styles.btn}>Переглянути</button>
      </form>
      <div className={styles.filterGroup}>
        <p>РОЗМІР</p>
        <span></span>
      </div>
      <form>
        {sizes.map((size, id) => (
          <Checkbox
            key={size.name}
            isCheked={size.checked}
            checkHandler={() => onHandChangSize(id)}
            label={size.name}
            index={id}
          />
        ))}

        <button className={styles.btn}>Переглянути</button>
      </form>
      <div className={styles.filterGroup}>
        <p>СЕЗОН</p>
        <span></span>
      </div>
      <form>
        {seasons.map((season, id) => (
          <Checkbox
            key={season.name}
            isCheked={season.checked}
            checkHandler={() => onHandChangSeason(id)}
            label={season.name}
            index={id}
          />
        ))}

        <button className={styles.btn}>Переглянути</button>
      </form>
    </div>
  );
};

export default SideFilter;
