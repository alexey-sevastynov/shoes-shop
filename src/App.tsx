import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import SideFilter from "./components/side-filter/SideFilter";

import Items from "./components/items/Items";
import FotoBlock from "./components/foto-block/FotoBlock";
import Descrption from "./components/description/Descrption";
import Sort from "./components/sort/Sort";
import Basket from "./components/basket/Basket";
import Favorite from "./components/favorite/Favorite";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import FavoritePage from "./pages/FavoritePage";
import DescriptionPage from "./pages/DescriptionPage";

const fotoShoes = [
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-2-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-3-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-4-515x687.jpg",
  "https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-5-515x687.jpg",
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<BasketPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="description" element={<DescriptionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
