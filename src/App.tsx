import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import SideFilter from "./components/side-filter/SideFilter";

import Items from "./components/items/Items";
import FotoBlock from "./components/foto-block/FotoBlock";

const fotoShoes = [
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-2-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-3-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-4-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-5-515x687.jpg",
];

function App() {
  return (
    <div className="container">
      <Header />
      <Filter />
      {/* <div className="main">
        <SideFilter />
        <Items />
      </div> */}
      <div className="main">
        <FotoBlock image={fotoShoes} />
      </div>
    </div>
  );
}

export default App;
