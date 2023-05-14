import React from "react";
import SideFilter from "../components/side-filter/SideFilter";

interface FilterMobilePageProps {}

const FilterMobilePage: React.FC<FilterMobilePageProps> = () => {
  return (
    <div className="filter-mobile">
      <div className="filter-mobile-header">
        <p>filter</p>
        <div className="header-close" />
      </div>
      <SideFilter />
      <div className="filter-mobile-footer">
        <button>Смотреть (275) товаров</button>
        <button>Назад</button>
      </div>
    </div>
  );
};

export default FilterMobilePage;
