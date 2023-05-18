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

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { items, status } = useAppSelector(selectorShoesData);
  console.log(status);
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const apiShoes = async () => {
    dispatch(fetchShoes());
  };

  React.useEffect(() => {
    apiShoes();
  }, []);

  const showShoes = items.map((shoe) => <ItemCard key={shoe.id} {...shoe} />);

  const onLoader = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="main">
      {isMobile && <SideFilter />}
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
