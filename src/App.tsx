import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import SideFilter from "./components/side-filter/SideFilter";

function App() {
  return (
    <div className="container">
      <Header />
      <Filter />
      <SideFilter />
    </div>
  );
}

export default App;
