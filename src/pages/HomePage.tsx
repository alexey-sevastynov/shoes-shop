import React from "react";
import { useMediaQuery } from "react-responsive";
import SideFilter from "../components/side-filter/SideFilter";
import Items from "../components/items/Items";
import Sort from "../components/sort/Sort";
import Category from "../components/category/Category";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchShoes, selectorShoesData } from "../redux/slices/shoes";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { items } = useAppSelector(selectorShoesData);
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

  return (
    <div className="main">
      {isMobile && <SideFilter />}
      <div className="main-col-2">
        <Sort />
        <Items />
      </div>
      <div className="main-col-2-mobile">
        <div className="main-col-2-mobile-header">
          <Category />
          <Sort />
        </div>
        <Items />
      </div>
    </div>
  );
};

export default HomePage;
