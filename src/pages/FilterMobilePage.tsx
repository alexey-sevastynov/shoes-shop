import React from "react";
import SideFilter from "../components/side-filter/SideFilter";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchShoes, selectorShoesData } from "../redux/slices/shoes";
import { selectorSort } from "../redux/slices/filterSlice";
import { Link } from "react-router-dom";

interface FilterMobilePageProps {}

const FilterMobilePage: React.FC<FilterMobilePageProps> = () => {
  const { items, status, maxPrice, minPrice } =
    useAppSelector(selectorShoesData);
  const { sort, types, colors, seasons, sizes } = useAppSelector(selectorSort);

  const dispatch = useAppDispatch();

  const apiShoes = async () => {
    const showSortName = sort.sortProperty.replace("-", "");
    const ascOrDesc = sort.sortProperty.includes("-") ? "asc" : "desc";
    const filterByPrice = `priceSale_gte=${minPrice}&priceSale_lte=${maxPrice}`;
    const showCategories = types
      .filter((category) => category.checked)
      .map((item) => "category=" + item.en.toLowerCase() + "&")
      .join("");
    const filterByColors = colors
      .filter((color) => color.checked)
      .map((item) => "color.en=" + item.en.toLowerCase() + "&")
      .join("");
    const filterBySeasons = seasons
      .filter((season) => season.checked)
      .map((item) => "season.en=" + item.en.toLowerCase() + "&")
      .join("");

    const filterBySizes = sizes
      .filter((size) => size.checked)
      .map((item) => "sizes_like=" + item.name + "&")
      .join("");

    dispatch(
      fetchShoes({
        showSortName,
        ascOrDesc,
        showCategories,
        filterByPrice,
        filterByColors,
        filterBySeasons,
        filterBySizes,
      })
    );
  };

  React.useEffect(() => {
    apiShoes();
  }, [types, colors, sizes, seasons, maxPrice, minPrice]);

  const onClickCategories = () => {
    apiShoes();
    window.history.back();
  };
  const onClickBack = () => {
    window.history.back();
  };

  return (
    <div className="filter-mobile">
      <div className="filter-mobile-header">
        <p>filter</p>

        <div className="header-close" onClick={onClickBack} />
      </div>
      <SideFilter />
      <div className="filter-mobile-footer">
        <button onClick={onClickCategories}>
          Смотреть ({items.length}) товаров
        </button>
        <button className="back" onClick={onClickBack}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default FilterMobilePage;
