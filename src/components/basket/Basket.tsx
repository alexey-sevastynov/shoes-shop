import React from "react";
import styles from "./basket.module.scss";
import axios from "axios";

import CardBasket from "./CardBasket";
import Ordering from "./Ordering";
import Delivery from "./Delivery";
import Comment from "./Comment";

import { selectTranslations } from "../../redux/slices/i18nSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectorBasket, setCheckedForm } from "../../redux/slices/basketSlice";
import { isValidCity, isValidEmail } from "../../hook/hook";

const TOKEN = "6106484951:AAGBh8mrWzbiOIqToGFZ1pPaN99wB6_GwK4";
const CHAD_ID = "-1001892003844";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
  const dispatch = useAppDispatch();
  const t = useAppSelector(selectTranslations);
  const {
    items,
    totalPrice,
    totalCount,
    valueMobile,
    valueSurName,
    valueName,
    valuePaternalName,
    valueComent,
    valueEmail,
    isCallBack,
    checkeForm,
  } = useAppSelector(selectorBasket);
  const { activeRegion, activeCity, activeMethod, activeAdress, allCity } =
    useAppSelector((state) => state.np);

  const { activeBranch } = useAppSelector((state) => state.npPoints);

  const [isAccept, setIsAccept] = React.useState(false);
  const [orderSuccess, setOrderSuccess] = React.useState(false);

  const string = items
    .map(
      (item, id) =>
        `<b> ${id + 1} товар: </b>
<i> Артикуль: </i> ${item.article}
<i> Розмір: </i> ${item.sizes} р
<i> Ціна за одиницю: </i> ${item.priceSale} грн
<i> Кількість: </i> ${item.count} шт
______________________________
`
    )
    .join("");

  const onSubmit = () => {
    let message = `<b>Заявка із сайту !</b>\n`;
    message += string;
    message += `<i>Загальна сумма: </i> ${totalPrice} грн\n`;
    message += `<i>Загальна кількість: </i> ${totalCount} шт\n`;
    message += `\n`;
    message += `<b>Доставка: </b>\n`;
    message += `<i>Область: </i> ${activeRegion}\n`;
    message += `<i>Місто: </i> ${activeCity}\n`;
    message += `<i>Спосіб достваки: </i> ${activeMethod}\n`;
    message += `<i>Відділення: </i> ${activeBranch}\n`;
    message += `<i>Адрес, для курьєра: </i> ${activeAdress}\n`;
    message += `\n`;
    message += `<b>Покупець: </b>\n`;
    message += `<i>Прізвице: ${valueSurName}</i>\n`;
    message += `<i>Ім'я:     ${valueName}</i>\n`;
    message += `<i>По батькові: ${valuePaternalName}</i>\n`;
    message += `\n`;
    message += `<i>Перезвонити покупцю?    ${isCallBack ? "ні" : "так"}</i>\n`;
    message += `<b>Телефон: </b>  ${valueMobile}\n`;
    message += `<b>Email: </b>    ${valueEmail}\n`;
    message += `\n`;
    message += `Коментар покупця: <i>${
      valueComent.length === 0 ? "---" : valueComent
    }</i>\n`;
    if (
      valueSurName.length <= 2 ||
      valueMobile.length <= 9 ||
      valueEmail.length <= 3 ||
      valueName.length <= 2 ||
      valuePaternalName.length <= 2 ||
      !isValidEmail(valueEmail) ||
      activeCity.length <= 2 ||
      !isValidCity(allCity, activeCity) ||
      activeMethod === "" ||
      activeBranch === ""
    ) {
      dispatch(setCheckedForm(true));
    } else {
      axios
        .post(URL_API, {
          chat_id: CHAD_ID,
          parse_mode: "html",
          text: message,
        })
        .then(() => {
          // setTel("");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setOrderSuccess(true);
          console.log(document.body.scrollHeight);
          window.scroll(document.body.scrollHeight, document.body.scrollHeight);
          setTimeout(() => {
            setOrderSuccess(false);
          }, 4000);
        });
    }
  };

  return (
    <div className={styles.root}>
      <p className={styles.title}>{t.basket.basket}</p>
      {items.length !== 0 ? (
        <div className={styles.basketCards}>
          <div className={styles.basketCardsCol_1}>
            {items.map((item) => (
              <CardBasket key={item.id} t={t} {...item} />
            ))}

            <div className={styles.price}>
              <div className={styles.priceCol_1}>
                <p>{t.basket.goods}:</p>
                <span>{totalCount}</span>
              </div>
              <div className={styles.priceCol_2}>
                <p>{t.basket.summ}:</p>
                <span>{totalPrice} грн</span>
              </div>
            </div>
          </div>
          <div className={styles.basketCardsCol_2}>
            <Ordering t={t} />
            <Delivery t={t} />
            <Comment />
            <div className={styles.agreement}>
              <div className={styles.header}>
                <div className={styles.posNum}>4</div>
                <p>{t.basket.agreement}</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  //@ts-ignore
                  value={isAccept}
                  onChange={() => setIsAccept(!isAccept)}
                  name="agreement"
                />
                <label
                  // className={checkeForm === false ? styles.activeError : {}}
                  htmlFor="agreement"
                >
                  {t.basket.accept} <button>{t.basket.agreement}</button>
                </label>
              </div>
            </div>
            {orderSuccess && (
              <h3 style={{ textAlign: "center" }}>
                Щиро дякуємо, що обрали нас! Ми вже збираємо товар для
                відправки!
              </h3>
            )}
            <button onClick={onSubmit} className={styles.btnForm}>
              {t.basket.order}
            </button>
          </div>
        </div>
      ) : (
        <p>Ваш кошик пустий</p>
      )}
    </div>
  );
};

export default Basket;
