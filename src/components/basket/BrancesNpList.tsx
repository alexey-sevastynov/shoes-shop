import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getActiveBranch } from "../../redux/slices/npPoints";

type BrancesNpListProps = {
  branch?: string;
};

const BrancesNpList: React.FC<BrancesNpListProps> = ({ branch }) => {
  const dispatch = useAppDispatch();
  const { activeBranch } = useAppSelector((state) => state.npPoints);
  const clickBranchActive = (branch: any) => {
    dispatch(getActiveBranch(branch));
  };

  return (
    <>
      {/* <li className={styles.active}>1 brances</li> */}
      <li
        className={activeBranch === branch ? styles.active : null}
        onClick={() => clickBranchActive(branch)}
      >
        {branch}
      </li>
    </>
  );
};

export default BrancesNpList;
