import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="container">
      <Header />
      {/* <Filter /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
