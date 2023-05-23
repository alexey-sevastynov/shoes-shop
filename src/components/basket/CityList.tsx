import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getActiveCity, getActiveRef } from "../../redux/slices/npSlice";

type CityListProps = {
  city?: string;
  setToggleCity?: any;
  toggleCity?: boolean;
  setValue?: any;
  value?: string;
};

const CityList: React.FC<CityListProps> = ({
  city,
  setToggleCity,
  setValue,
  value,
}) => {
  const dispatch = useAppDispatch();
  const { itemsNp } = useAppSelector((state) => state.np);

  const onClickCityActive = (city: any) => {
    dispatch(getActiveCity(city));
    setToggleCity(false);
    setValue(city);

    dispatch(getActiveRef(itemsNp));
  };
  return (
    <>
      <li className={styles.active} onClick={() => onClickCityActive(city)}>
        {city}
      </li>
    </>
  );
};

export default CityList;
