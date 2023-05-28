import React from "react";

import { useMediaQuery } from "react-responsive";

import SideFilter from "../components/side-filter/SideFilter";
import Sort from "../components/sort/Sort";
import Category from "../components/category/Category";
import ItemCard from "../components/item-card/ItemCard";
import Skeleton from "../components/Skeleton";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import ErrorApi from "../erorr-api/ErorrApi";
import {
  clearColor,
  clearColors,
  clearSeason,
  clearSeasons,
  clearSize,
  clearSizes,
  clearType,
  clearTypes,
  selectorSort,
} from "../redux/slices/filterSlice";
import {
  fetchShoes,
  selectorShoesData,
  setMaxPrice,
  setMinPrice,
} from "../redux/slices/shoes";
import { selectTranslations } from "../redux/slices/i18nSlice";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const { items, status, maxPrice, minPrice } =
    useAppSelector(selectorShoesData);
  const { sort, types, colors, seasons, sizes, searchValue } =
    useAppSelector(selectorSort);

  const t = useAppSelector(selectTranslations);

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
  }, [sort, types, colors, sizes, seasons, maxPrice, minPrice]);

  const onClickCategories = () => {
    apiShoes();
  };

  const onClickRemoveFilter = () => {
    dispatch(clearTypes());
    dispatch(clearColors());
    dispatch(clearSizes());
    dispatch(clearSeasons());
    dispatch(setMinPrice(999));
    dispatch(setMaxPrice(9999));
  };

  const removeActiveCategory = (
    obj?: any,
    maxPrice?: number,
    minPrice?: number
  ) => {
    if (
      obj.en === "White" ||
      obj.en === "Beige" ||
      obj.en === "Azure" ||
      obj.en === "Yellow" ||
      obj.en === "Green" ||
      obj.en === "Brown" ||
      obj.en === "Multi" ||
      obj.en === "Pink" ||
      obj.en === "Gray" ||
      obj.en === "Blue" ||
      obj.en === "Violet" ||
      obj.en === "Red" ||
      obj.en === "Black"
    ) {
      dispatch(clearColor(obj.en));
    }

    if (
      obj.en === "Shoes" ||
      obj.en === "Ballet" ||
      obj.en === "Sneakers" ||
      obj.en === "Sandals" ||
      obj.en === "Boots" ||
      obj.en === "Ankle boots" ||
      obj.en === "Jackboots"
    ) {
      dispatch(clearType(obj.en));
    }

    if (
      obj.name === "36" ||
      obj.name === "37" ||
      obj.name === "38" ||
      obj.name === "39" ||
      obj.name === "40" ||
      obj.name === "41"
    ) {
      dispatch(clearSize(obj.name));
    }

    if (
      obj.en === "DEMІ" ||
      obj.en === "WINTER" ||
      obj.en === "YEAR" ||
      obj.en === "SUMMER"
    ) {
      dispatch(clearSeason(obj.en));
    }

    if (minPrice || maxPrice) {
      dispatch(setMinPrice(999));
      dispatch(setMaxPrice(9999));
    }
  };

  const showShoes = items
    .filter((items) =>
      items.article.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((shoe) => <ItemCard key={shoe.id} {...shoe} />);

  const onLoader = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const showActiveFilterNames = (obj: any, isSize?: boolean) => {
    return obj
      .filter((item: any) => item.checked === true)
      .map((item: any) => (
        <div
          key={isSize ? item.name : item.en}
          className="main-col-2-filter"
          onClick={() => removeActiveCategory(item)}
        >
          <p>{isSize ? item.name : item.en}</p>
          <div className="close" />
        </div>
      ));
  };

  return (
    <div className="main">
      {isMobile && <SideFilter onClickCategories={onClickCategories} />}
      <div className="main-col-2">
        <Sort />
        <div className="main-col-2-filter-block">
          {showActiveFilterNames(types)}
          {showActiveFilterNames(colors)}
          {showActiveFilterNames(seasons)}
          {showActiveFilterNames(sizes, true)}

          {minPrice !== 999 || maxPrice !== 9999 ? (
            <div
              className="main-col-2-filter"
              onClick={() => removeActiveCategory({}, maxPrice, minPrice)}
            >
              <p>
                {t.homePage.from} {minPrice} {t.homePage.to} {maxPrice}
              </p>
              <div className="close" />
            </div>
          ) : null}

          {types.filter((item) => item.checked === true).length === 0 &&
          colors.filter((item) => item.checked === true).length === 0 &&
          sizes.filter((item) => item.checked === true).length === 0 &&
          seasons.filter((item) => item.checked === true).length === 0 &&
          maxPrice === 9999 &&
          minPrice === 999 ? null : (
            <div
              className="main-col-2-filter clear"
              onClick={onClickRemoveFilter}
            >
              <p>{t.homePage.clearAll}</p>
              <div className="close" />
            </div>
          )}
        </div>

        <div className="main-col-2-items">
          {status === "error" && <ErrorApi />}
          {status === "loading" ? onLoader : showShoes}
        </div>
      </div>
      <div className="main-col-2-mobile">
        <div className="main-col-2-mobile-header">
          <Category />
          <Sort />
        </div>
        <div className="main-col-2-items">
          {status === "error" && <ErrorApi />}
          {status === "loading" ? onLoader : showShoes}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
