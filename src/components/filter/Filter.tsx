import React from "react";
import styles from "./filter.module.scss";
import { NavLink } from "react-router-dom";

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  return (
    <nav className={styles.root}>
      <NavLink className={styles.active} to="/">
        Туфлі
      </NavLink>

      <NavLink to="/">Балетки</NavLink>

      <NavLink to="/">Кросівки</NavLink>

      <NavLink to="/">Кеди</NavLink>

      <NavLink to="/">Босоніжки</NavLink>

      <NavLink to="/">Сандалі</NavLink>

      <NavLink to="/">Черевики</NavLink>

      <NavLink to="/">Ботильйои</NavLink>

      <NavLink to="/">Чоботи</NavLink>

      <NavLink to="/">Ботфорти</NavLink>
    </nav>
  );
};

export default Filter;
