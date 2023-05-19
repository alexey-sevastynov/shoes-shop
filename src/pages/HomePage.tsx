import React from "react";
import { useMediaQuery } from "react-responsive";
import SideFilter from "../components/side-filter/SideFilter";

import Sort from "../components/sort/Sort";
import Category from "../components/category/Category";
import ItemCard from "../components/item-card/ItemCard";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchShoes, selectorShoesData } from "../redux/slices/shoes";
import ErrorApi from "../erorr-api/ErorrApi";
import Skeleton from "../components/Skeleton";
import { selectorSort } from "../redux/slices/filterSlice";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const { items, status, maxPrice, minPrice } =
    useAppSelector(selectorShoesData);
  const { sort, types, colors, seasons } = useAppSelector(selectorSort);

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

    dispatch(
      fetchShoes({
        showSortName,
        ascOrDesc,
        showCategories,
        filterByPrice,
        filterByColors,
        filterBySeasons,
      })
    );
  };

  React.useEffect(() => {
    apiShoes();
  }, [sort]);

  const onClickCategories = () => {
    apiShoes();
  };

  const showShoes = items.map((shoe) => <ItemCard key={shoe.id} {...shoe} />);

  const onLoader = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="main">
      {isMobile && <SideFilter onClickCategories={onClickCategories} />}
      <div className="main-col-2">
        <Sort />
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
