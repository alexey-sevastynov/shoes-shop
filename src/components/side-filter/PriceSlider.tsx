import React from "react";
import "./priceSlider.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  selectorShoesData,
  setMinPrice,
  setMaxPrice,
} from "../../redux/slices/shoes";

const MIN_RANGE_INPUT: number = 0;
const MAX_RANGE_INPUT: number = 9999;
const PRICE_GAP: number = 1000;

interface PriceSliderProps {
  valutaText: string;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ valutaText }) => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector(selectorShoesData);

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      const number = +e.target.value;
      dispatch(setMinPrice(number));
    }
  };
  const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      const number = +e.target.value;
      dispatch(setMaxPrice(number));
    }
  };

  const clickMin = (e: React.MouseEvent<HTMLInputElement>) => {
    if (maxPrice - minPrice < PRICE_GAP) {
      const result = maxPrice - PRICE_GAP;
      dispatch(setMinPrice(result));
    }
  };
  const clickMax = (e: React.MouseEvent<HTMLInputElement>) => {
    if (maxPrice - minPrice < PRICE_GAP) {
      const result = minPrice + PRICE_GAP;
      dispatch(setMaxPrice(result));
    }
  };

  const positionLeft: string = (+minPrice / MAX_RANGE_INPUT) * 100 + "%";
  const positionRight: string = 100 - (+maxPrice / MAX_RANGE_INPUT) * 100 + "%";

  return (
    <>
      <div className="price-input">
        <div className="field">
          <input
            type="number"
            className="input-min"
            value={minPrice}
            onChange={onChangeMin}
          />
          <span>{valutaText}</span>
        </div>
        <div className="separator">-</div>
        <div className="field">
          <input
            type="number"
            className="input-max"
            value={maxPrice}
            onChange={onChangeMax}
          />
          <span>{valutaText}</span>
        </div>
      </div>
      <div className="slider">
        <div
          className="progress"
          style={{ left: positionLeft, right: positionRight }}
        ></div>
      </div>
      <div className="range-input">
        <input
          className="range-min"
          type="range"
          min={MIN_RANGE_INPUT}
          max={MAX_RANGE_INPUT}
          value={minPrice}
          onChange={onChangeMin}
          onMouseUp={clickMin}
        />
        <input
          className="range-max"
          type="range"
          min={MIN_RANGE_INPUT}
          max={MAX_RANGE_INPUT}
          value={maxPrice}
          onChange={onChangeMax}
          onMouseUp={clickMax}
        />
      </div>
    </>
  );
};

export default PriceSlider;
