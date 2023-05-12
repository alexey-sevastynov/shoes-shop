import React from "react";
import SideFilter from "../components/side-filter/SideFilter";
import Items from "../components/items/Items";
import Sort from "../components/sort/Sort";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="main">
      <SideFilter />
      <div className="main-col-2">
        <Sort />
        <Items />
      </div>
    </div>
  );
};

export default HomePage;
