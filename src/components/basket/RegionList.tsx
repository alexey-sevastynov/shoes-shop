import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  clearRef,
  getActiveCity,
  getActiveRef,
  getActiveRegion,
} from "../../redux/slices/npSlice";
import { clearAllBranches, clearBranch } from "../../redux/slices/npPoints";

interface RegionProps {
  region?: string;
  setValue?: any;
}

const RegionList: React.FC<RegionProps> = ({ region, setValue }) => {
  const dispatch = useAppDispatch();
  const { activeRegion } = useAppSelector((state) => state.np);
  const clickRegionActive = (region: any) => {
    dispatch(getActiveRegion(region));
    dispatch(getActiveCity(""));
    dispatch(clearRef(""));
    setValue("");
    dispatch(clearBranch(""));
    dispatch(clearAllBranches([]));
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
