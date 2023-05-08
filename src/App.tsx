import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import SideFilter from "./components/side-filter/SideFilter";

import Items from "./components/items/Items";

function App() {
  return (
    <div className="container">
      <Header />
      <Filter />
      {/* <div className="main">
        <SideFilter />
        <Items />
      </div> */}
    </div>
  );
}

export default App;
