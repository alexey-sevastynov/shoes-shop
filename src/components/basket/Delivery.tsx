import React from "react";
import styles from "./basket.module.scss";
import Sort from "../sort/Sort";
import RegionList from "./RegionList";
import CityList from "./CityList";
import BrancesNpList from "./BrancesNpList";
import { useComponentDidMount } from "../../hook/hook";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  fetchNp,
  getActiveCity,
  getActiveRef,
  getActiveRegion,
  getAllRegions,
  getCitiesRegion,
} from "../../redux/slices/npSlice";
import { fetchPointNp, getAllBranches } from "../../redux/slices/npPoints";

const NP_API_KEY = "9bb8f3a4087c2ec455b7e1cd7310f4c5";
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

interface DeliveryProps {
  t: any;
}

const Delivery: React.FC<DeliveryProps> = ({ t }) => {
  const dispatch = useAppDispatch();
  const { itemsNp, allRegions, activeRegion, allCity, cityRef } =
    useAppSelector((state) => state.np);

  const isComponentMounted = useComponentDidMount(); //hook

  const { itemsPointsNp, allBranches, activeBranch } = useAppSelector(
    (state) => state.npPoints
  );
  const [value, setValue] = React.useState<string>("");
  const [toggleRegion, setToggleRegion] = React.useState(false);
  const regionRef = React.useRef<HTMLDivElement>(null);
  const [toggleCity, setToggleCity] = React.useState(false);
  const [toggleBranche, setToggleBranche] = React.useState(false);
  const branchRef = React.useRef<HTMLDivElement>(null);

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
    };

    document.body.addEventListener("click", handleOutsideClick);

    // class -> componentDidUnmount
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  React.useEffect(() => {
    if (isComponentMounted) {
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

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (value.length > 1) {
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

  return (
    <div className={styles.delivery}>
      <div className={styles.header}>
        <div className={styles.posNum}>2</div>
        <p>{t.basket.delivery}</p>
      </div>
      <div className={styles.region} ref={regionRef} onClick={clickRegion}>
        <p>{activeRegion === "" ? t.basket.region : activeRegion}</p>
        <svg
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
              <RegionList key={region} region={region} />
            ))}
            <RegionList />
          </ul>
        )}
      </div>
      <div className={styles.city} onClick={clickCity}>
        <input
          placeholder={`${t.basket.city} *`}
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
      <div className={styles.deliveryMethod}>
        <p>Спосіб доставки *</p>
        <svg
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
        {/* <ul className={styles.popup}>
          <li className={styles.active}>Віділення Нової пошти</li>
          <li>Адресна доставка</li>
        </ul> */}
      </div>
      <div className={styles.branches} ref={branchRef} onClick={clickBranches}>
        <p>{activeBranch === "" ? "Введіть номер складу *" : activeBranch}</p>
        <svg
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
            {allBranches.map((branch) => (
              <BrancesNpList key={branch} branch={branch} />
            ))}
          </ul>
        )}
      </div>
      <div className={styles.adress}>
        <input type="text" placeholder="Adress" />
        <svg
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
      </div>
      <div className={styles.PriceMethod}>
        <p>Спосіб оплати *</p>
        <svg
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
        {/* <ul className={styles.popup}>
          <li className={styles.active}>Віділення Нової пошти</li>
          <li>Адресна доставка</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Delivery;
