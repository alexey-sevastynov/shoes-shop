import React from "react";
import Descrption from "../components/description/Descrption";
import FotoBlock from "../components/foto-block/FotoBlock";
import FotoBlockMobile from "../components/foto-block/FotoBlockMobile";
import { selectorShoesData } from "../redux/slices/shoes";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const img = [
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_2.jpg",
];

type DescriptionPageProps = {};

const DescriptionPage: React.FC<DescriptionPageProps> = () => {
  const { currentItem } = useAppSelector(selectorShoesData);
  const { imageURL } = currentItem;

  return (
    <div className="description">
      <FotoBlockMobile image={imageURL} />
      <FotoBlock image={imageURL} />
      <Descrption {...currentItem} />
    </div>
  );
};

export default DescriptionPage;
