import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  selectorBasket,
  setValueEmail,
  setValueMobile,
  setValueName,
  setValuePaternalName,
  setValueSurName,
  toggleIsCallBack,
} from "../../redux/slices/basketSlice";
import { isValidEmail } from "../../hook/hook";

interface OrderingProps {
  t: any;
}

const Ordering: React.FC<OrderingProps> = ({ t }) => {
  const dispatch = useAppDispatch();

  const { checkeForm } = useAppSelector(selectorBasket);

  const [surName, setSurName] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [paternalName, setpaternalName] = React.useState<string>("");
  const [mobile, setMobile] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const updateSearchValue = React.useCallback(
    (str: string, state: string, bol?: boolean): void => {
      if (state === "surName") {
        dispatch(setValueSurName(str));
      }
      if (state === "name") {
        dispatch(setValueName(str));
      }
      if (state === "paternalName") {
        dispatch(setValuePaternalName(str));
      }
      if (state === "mobile") {
        dispatch(setValueMobile(str));
      }
      if (state === "email") {
        dispatch(setValueEmail(str));
      }
      if (state === "") {
        dispatch(toggleIsCallBack(bol || false));
      }
    },
    []
  );

  const handleChangeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurName(event.target.value);
    updateSearchValue(event.target.value, "surName");
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    updateSearchValue(event.target.value, "name");
  };
  const handleChangepaternalName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpaternalName(event.target.value);
    updateSearchValue(event.target.value, "paternalName");
  };
  const handleChangeMobile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
    updateSearchValue(event.target.value, "mobile");
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    updateSearchValue(event.target.value, "email");
  };
  const handleChangeIsCall = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue("", "", event.target.checked);
  };

  return (
    <div className={styles.ordering}>
      <div className={styles.header}>
        <div className={styles.posNum}>1</div>
        <p>{t.basket.ordering}</p>
      </div>
      <div className={styles.inputName}>
        <input
          type="text"
          className={surName.length <= 2 && checkeForm ? styles.inputError : {}}
          onChange={handleChangeSurName}
          value={surName}
          placeholder={`${t.basket.surName} *`}
        />
        <input
          type="text"
          className={name.length <= 2 && checkeForm ? styles.inputError : {}}
          onChange={handleChangeName}
          value={name}
          placeholder={`${t.basket.name} *`}
        />
        <input
          type="text"
          className={
            paternalName.length <= 2 && checkeForm ? styles.inputError : {}
          }
          onChange={handleChangepaternalName}
          value={paternalName}
          placeholder={`${t.basket.paternalName} *`}
        />
      </div>
      <div className={styles.inputPhone}>
        <input
          type="tel"
          className={mobile.length <= 9 && checkeForm ? styles.inputError : {}}
          onChange={handleChangeMobile}
          value={mobile}
          placeholder={`${t.basket.phone} *`}
        />
      </div>
      <div className={styles.inputChexbox}>
        <input
          type="checkbox"
          onChange={handleChangeIsCall}
          id="isCall"
          name="isCall"
        />
        <label htmlFor="isCall">{t.basket.notCall}</label>
      </div>
      <div className={styles.inputEmail}>
        <input
          type="email"
          className={
            (email.length <= 3 && checkeForm) ||
            (!isValidEmail(email) && checkeForm)
              ? styles.inputError
              : {}
          }
          onChange={handleChangeEmail}
          value={email}
          placeholder="Email *"
        />
      </div>
      <span className={styles.emailLabel}>{t.basket.followOrdering}</span>
    </div>
  );
};

export default Ordering;
