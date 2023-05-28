import React from "react";
import SideFilter from "../components/side-filter/SideFilter";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  fetchShoes,
  selectorShoesData,
  setMaxPrice,
  setMinPrice,
} from "../redux/slices/shoes";
import {
  clearColors,
  clearSeasons,
  clearSizes,
  clearTypes,
  selectorSort,
} from "../redux/slices/filterSlice";
import { selectTranslations } from "../redux/slices/i18nSlice";

interface FilterMobilePageProps {}

const FilterMobilePage: React.FC<FilterMobilePageProps> = () => {
  const { items, status, maxPrice, minPrice } =
    useAppSelector(selectorShoesData);
  const { sort, types, colors, seasons, sizes } = useAppSelector(selectorSort);

  const t = useAppSelector(selectTranslations);
  const dispatch = useAppDispatch();

  const apiShoes = async () => {
    const showSortName = sort.sortProperty.replace("-", "");
    const ascOrDesc = (await sort.sortProperty.includes("-")) ? "asc" : "desc";
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
  }, [sort, types, colors, sizes, seasons, maxPrice, minPrice]);

  const onClickCategories = () => {
    apiShoes();
    window.history.back();
  };
  const onClickBack = () => {
    window.history.back();
  };
  const onClickRemoveFilter = () => {
    dispatch(clearTypes());
    dispatch(clearColors());
    dispatch(clearSizes());
    dispatch(clearSeasons());
    dispatch(setMinPrice(999));
    dispatch(setMaxPrice(9999));
  };

  return (
    <div className="filter-mobile">
      <div className="filter-mobile-header">
        <p>{t.sideFilter.filter}</p>

        <div className="header-close" onClick={onClickBack} />
      </div>
      <SideFilter />
      <div className="filter-mobile-footer">
        <button onClick={onClickCategories}>
          {t.sideFilter.see} ({items.length}) {t.sideFilter.goods}
        </button>
        {types.filter((item) => item.checked === true).length === 0 &&
        colors.filter((item) => item.checked === true).length === 0 &&
        sizes.filter((item) => item.checked === true).length === 0 &&
        seasons.filter((item) => item.checked === true).length === 0 &&
        maxPrice === 9999 &&
        minPrice === 999 ? (
          <button className="back" onClick={onClickBack}>
            {t.sideFilter.back}
          </button>
        ) : (
          <button className="back" onClick={onClickRemoveFilter}>
            {t.sideFilter.removeSelectedFilters}
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterMobilePage;
