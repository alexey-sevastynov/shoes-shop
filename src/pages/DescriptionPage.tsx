import React from "react";
import Descrption from "../components/description/Descrption";
import FotoBlock from "../components/foto-block/FotoBlock";

const img = [
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
];

type DescriptionPageProps = {};

const DescriptionPage: React.FC<DescriptionPageProps> = () => {
  return (
    <div className="description">
      <FotoBlock image={img} />
      <Descrption />
    </div>
  );
};

export default DescriptionPage;
