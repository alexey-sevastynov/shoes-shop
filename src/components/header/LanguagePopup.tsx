import React from "react";
import styles from "./header.module.scss";
import arrow from "../../assets/image/arrow.png";

import "../../i18n/config";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectTranslations } from "../../redux/slices/i18nSlice";
import { setLang } from "../../redux/slices/i18nSlice";
import { onTogglePopup } from "../../redux/slices/headerSlice";

interface LanguagePopupProps {}

const LanguagePopup: React.FC<LanguagePopupProps> = () => {
  const dispatch = useAppDispatch();
  const t = useAppSelector(selectTranslations);
  const togglePopup = useAppSelector((state) => state.header.togglePopup);

  const showPopup = togglePopup && (
    <div className={styles.popup}>
      <ul>
        <li onClick={() => dispatch(setLang("en"))}>{t.header.en}</li>
        <li onClick={() => dispatch(setLang("ua"))}>{t.header.ua}</li>
      </ul>
    </div>
  );
  return (
    <>
      <div
        className={styles.blockArrow}
        onClick={() => dispatch(onTogglePopup(togglePopup))}
      >
        <p>UA</p>
        <img
          className={togglePopup ? styles.blockArrowIcon : ""}
          src={arrow}
          alt="arrow"
          width={8}
          height={8}
        />
      </div>
      {showPopup}
    </>
  );
};

export default LanguagePopup;
