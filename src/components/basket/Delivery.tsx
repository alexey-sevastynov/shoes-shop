import React from "react";
import styles from "./basket.module.scss";
import Sort from "../sort/Sort";
import RegionList from "./RegionList";
import CityList from "./CityList";
import BrancesNpList from "./BrancesNpList";
import { isValidCity, useComponentDidMount } from "../../hook/hook";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  fetchNp,
  getActiveCity,
  getActiveDeliveryMethod,
  getActiveRef,
  getActiveRegion,
  getAllRegions,
  getCitiesRegion,
  updateActiveAdress,
} from "../../redux/slices/npSlice";
import { fetchPointNp, getAllBranches } from "../../redux/slices/npPoints";
import { selectorBasket } from "../../redux/slices/basketSlice";

const NP_API_KEY = "9bb8f3a4087c2ec455b7e1cd7310f4c5";
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

interface DeliveryProps {
  t: any;
}

const Delivery: React.FC<DeliveryProps> = ({ t }) => {
  const dispatch = useAppDispatch();
  const {
    itemsNp,
    allRegions,
    activeRegion,
    allCity,
    cityRef,
    activeCity,
    activeAdress,
  } = useAppSelector((state) => state.np);

  const { checkeForm } = useAppSelector(selectorBasket);

  const isComponentMounted = useComponentDidMount(); //hook

  const { itemsPointsNp, allBranches, activeBranch } = useAppSelector(
    (state) => state.npPoints
  );
  const [value, setValue] = React.useState<string>("");

  //region
  const [toggleRegion, setToggleRegion] = React.useState(false);
  const regionRef = React.useRef<HTMLDivElement>(null);
  //city
  const [toggleCity, setToggleCity] = React.useState(false);
  const cityPopupRef = React.useRef<HTMLDivElement>(null);
  //branch
  const [valueBranch, setValueBranch] = React.useState<string>("");
  const [toggleBranche, setToggleBranche] = React.useState(false);
  const branchRef = React.useRef<HTMLDivElement>(null);
  //delivery method
  const [toggleDelivMethod, setToggleDelivMethod] = React.useState(false);
  const [delivMethod, setDelivMethod] = React.useState("");
  const delivMethodRef = React.useRef<HTMLDivElement>(null);
  //pay method
  const [togglePayMethod, setTogglePayMethod] = React.useState(false);
  const [payMethod, setPayMethod] = React.useState("");
  const paydRef = React.useRef<HTMLDivElement>(null);
  // deivery to home
  const [adress, setAdress] = React.useState("");

  const apiNewPosta = async () => {
    dispatch(fetchNp());
  };
  React.useEffect(() => {
    apiNewPosta();

    const handleOutsideClick = (e: MouseEvent) => {
      if (regionRef.current && !e.composedPath().includes(regionRef.current)) {
        setToggleRegion(false);
      }
      if (branchRef.current && !e.composedPath().includes(branchRef.current)) {
        setToggleBranche(false);
      }
      if (
        cityPopupRef.current &&
        !e.composedPath().includes(cityPopupRef.current)
      ) {
        setToggleCity(false);
      }
      if (
        delivMethodRef.current &&
        !e.composedPath().includes(delivMethodRef.current)
      ) {
        setToggleDelivMethod(false);
      }
      if (paydRef.current && !e.composedPath().includes(paydRef.current)) {
        setTogglePayMethod(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    // class -> componentDidUnmount
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  React.useEffect(() => {
    if (isComponentMounted && cityRef !== "") {
      dispatch(fetchPointNp({ cityRef }));
    }
  }, [cityRef]);

  const clickRegion = () => {
    setToggleRegion(!toggleRegion);
    if (!toggleRegion) {
      dispatch(getAllRegions(itemsNp));
    }
  };

  const clickCity = () => {
    dispatch(getCitiesRegion(itemsNp));
  };

  const clickBranches = () => {
    setToggleBranche(!toggleBranche);
    if (!toggleBranche) {
      dispatch(getAllBranches(itemsPointsNp));
    }
  };

  const clickDelivMethod = () => {
    setToggleDelivMethod(!toggleDelivMethod);
  };

  const activeDelivMethod = (nameMethod: string) => {
    dispatch(getActiveDeliveryMethod(nameMethod));
    setDelivMethod(nameMethod);
  };

  const clickPayMethod = () => {
    setTogglePayMethod(!togglePayMethod);
  };

  const activePayMethod = (nameMethod: string) => {
    setPayMethod(nameMethod);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length >= 1) {
      setToggleCity(true);
    } else {
      setToggleCity(false);
    }

    if (allCity.find((item) => item === event.target.value)) {
      setToggleCity(false);
      dispatch(getActiveCity(event.target.value));
      dispatch(getActiveRef(itemsNp));
    }
  };
  const onChangeInputBranch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueBranch(event.target.value);
    if (event.target.value.length >= 1) {
      setToggleBranche(true);
    } else {
      setToggleCity(false);
    }

    // if (allCity.find((item) => item === event.target.value)) {
    //   setToggleCity(false);
    //   dispatch(getActiveCity(event.target.value));
    //   dispatch(getActiveRef(itemsNp));
    // }
  };

  const updateSearchValue = React.useCallback((str: string): void => {
    dispatch(updateActiveAdress(str));
  }, []);

  const handleChangeAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.delivery}>
      <div className={styles.header}>
        <div className={styles.posNum}>2</div>
        <p>{t.basket.delivery}</p>
      </div>
      <div className={styles.region} ref={regionRef} onClick={clickRegion}>
        <p
          className={
            activeRegion === "" && checkeForm ? styles.activeError : {}
          }
        >
          {activeRegion === "" ? t.basket.region : activeRegion}
        </p>
        <svg
          style={toggleRegion ? { transform: "rotate(180deg)" } : {}}
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
        {toggleRegion && (
          <ul className={styles.popup}>
            {allRegions.map((region) => (
              <RegionList key={region} region={region} setValue={setValue} />
            ))}
            <RegionList />
          </ul>
        )}
      </div>
      <div className={styles.city} ref={cityPopupRef} onClick={clickCity}>
        <input
          placeholder={`${t.basket.city} *`}
          className={
            !isValidCity(allCity, activeCity) && checkeForm
              ? styles.activeError
              : {}
          }
          onChange={(event) => onChangeInput(event)}
          value={value}
        />
        {toggleCity && (
          <ul className={styles.popup}>
            {allCity
              .filter((item) =>
                item.toLowerCase().startsWith(value.toLowerCase())
              )
              .map((city) => (
                <CityList
                  key={city}
                  city={city}
                  setToggleCity={setToggleCity}
                  toggleCity={toggleCity}
                  setValue={setValue}
                  value={value}
                />
              ))}
          </ul>
        )}
      </div>
      <div
        className={styles.deliveryMethod}
        ref={delivMethodRef}
        onClick={clickDelivMethod}
      >
        {delivMethod === "" ? (
          <p
            className={
              delivMethod === "" && checkeForm ? styles.activeError : {}
            }
          >
            {t.basket.methodOfDelivery} *
          </p>
        ) : (
          <p>{delivMethod}</p>
        )}
        <svg
          style={toggleDelivMethod ? { transform: "rotate(180deg)" } : {}}
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
        {toggleDelivMethod && (
          <ul className={styles.popup}>
            {["Віділення Нової пошти", "Адресна доставка"].map((item) => (
              <li
                key={item}
                className={delivMethod === item ? styles.active : null}
                onClick={() => activeDelivMethod(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {delivMethod === "Віділення Нової пошти" && (
        <div
          className={styles.branches}
          ref={branchRef}
          onClick={clickBranches}
        >
          <input
            type="adress"
            placeholder="Введіть номер складу *"
            className={
              activeBranch === "" && checkeForm ? styles.activeError : {}
            }
            onChange={(e) => onChangeInputBranch(e)}
            value={valueBranch}
          />

          <svg
            style={toggleBranche ? { transform: "rotate(180deg)" } : {}}
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
          {toggleBranche && (
            <ul className={styles.popup}>
              {allBranches
                .filter((item) =>
                  item.toLowerCase().includes(valueBranch.toLowerCase())
                )
                .map((branch) => (
                  <BrancesNpList
                    key={branch}
                    branch={branch}
                    setValueBranch={setValueBranch}
                  />
                ))}
            </ul>
          )}
        </div>
      )}
      {delivMethod === "Адресна доставка" && (
        <div className={styles.adress}>
          <input
            type="text"
            className={
              activeAdress === "" && checkeForm ? styles.activeError : {}
            }
            onChange={handleChangeAdress}
            value={adress}
            placeholder="Adress"
          />
        </div>
      )}
      <div
        className={styles.PriceMethod}
        ref={paydRef}
        onClick={clickPayMethod}
      >
        {payMethod === "" ? (
          <p
            className={payMethod === "" && checkeForm ? styles.activeError : {}}
          >
            {t.basket.paymentMethod} *
          </p>
        ) : (
          <p>{payMethod}</p>
        )}
        <svg
          style={togglePayMethod ? { transform: "rotate(180deg)" } : {}}
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
        {togglePayMethod && (
          <ul className={styles.popup}>
            {(delivMethod === "Віділення Нової пошти"
              ? [
                  "Готівкою при отриманні у відділені Нової Пошти",
                  "Онлайн-оплата VISA/MASTERCARD. Знижка -5%",
                ]
              : [
                  "Готівкою кур'єру Нової Пошти",
                  "Онлайн-оплата VISA/MASTERCARD. Знижка -5%",
                ]
            ).map((item) => (
              <li
                key={item}
                className={payMethod === item ? styles.active : null}
                onClick={() => activePayMethod(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Delivery;
