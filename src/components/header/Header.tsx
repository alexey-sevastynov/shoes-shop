import React from "react";
import styles from "./header.module.scss";
import LanguagePopup from "./LanguagePopup";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectTranslations } from "../../redux/slices/i18nSlice";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const t = useAppSelector(selectTranslations);

  return (
    <header className={styles.root}>
      <div className={styles.blockLanguage}>
        <LanguagePopup />
        <p>{t.header.city}</p>
      </div>
      <Link to="/menu" className={styles.blockMenuMob}>
        <span />
      </Link>
      <Link to="/">
        <h1>{t.header.title}</h1>
      </Link>
      <HeaderMenu />
    </header>
  );
};

export default Header;
