import React from "react";
import styles from "./header.module.scss";
import LanguagePopup from "./LanguagePopup";
import HeaderMenu from "./HeaderMenu";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.root}>
      <div className={styles.blockLanguage}>
        <LanguagePopup />
        <p>Dnipro</p>
      </div>
      <h1>Shop women shoes</h1>
      <HeaderMenu />
    </header>
  );
};

export default Header;
