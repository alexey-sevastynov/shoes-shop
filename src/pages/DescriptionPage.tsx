import React from "react";
import Descrption from "../components/description/Descrption";
import FotoBlock from "../components/foto-block/FotoBlock";
import FotoBlockMobile from "../components/foto-block/FotoBlockMobile";
import { selectorShoesData } from "../redux/slices/shoes";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import BasketPopup from "../components/basket-popup/BasketPopup";
import { selectorBasket } from "../redux/slices/basketSlice";

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
  const { items } = useAppSelector(selectorBasket);
  const [togglePopupBasket, setTogglePopupBaket] = React.useState(false);

  return (
    <div className="description">
      <FotoBlockMobile image={imageURL} />
      <FotoBlock image={imageURL} />
      <Descrption {...currentItem} setTogglePopupBaket={setTogglePopupBaket} />
      {togglePopupBasket && items.length > 0 && (
        <div className="description-popup">
          <BasketPopup setTogglePopupBaket={setTogglePopupBaket} />
        </div>
      )}
    </div>
  );
};

export default DescriptionPage;
