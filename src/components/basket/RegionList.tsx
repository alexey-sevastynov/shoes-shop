import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getActiveRegion } from "../../redux/slices/npSlice";

interface RegionProps {
  region?: string;
}

const RegionList: React.FC<RegionProps> = ({ region }) => {
  const dispatch = useAppDispatch();
  const { activeRegion } = useAppSelector((state) => state.np);
  const clickRegionActive = (region: any) => {
    dispatch(getActiveRegion(region));
  };

  return (
    <>
      <li
        className={activeRegion === region ? styles.active : null}
        onClick={() => clickRegionActive(region)}
      >
        {region}
      </li>
    </>
  );
};

export default RegionList;
