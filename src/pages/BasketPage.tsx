import React from "react";
import Basket from "../components/basket/Basket";

interface BasketPageProps {}

const BasketPage: React.FC<BasketPageProps> = () => {
  return (
    <>
      <Basket />
    </>
  );
};

export default BasketPage;
