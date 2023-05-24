import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getActiveBranch } from "../../redux/slices/npPoints";

type BrancesNpListProps = {
  branch?: string;
  setValueBranch?: any;
};

const BrancesNpList: React.FC<BrancesNpListProps> = ({
  branch,
  setValueBranch,
}) => {
  const dispatch = useAppDispatch();
  const { activeBranch } = useAppSelector((state) => state.npPoints);
  const clickBranchActive = (branch: any) => {
    dispatch(getActiveBranch(branch));
    setValueBranch(branch);
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
