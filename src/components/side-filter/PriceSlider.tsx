import React from "react";
import "./priceSlider.css";

const MIN_RANGE_INPUT: number = 0;
const MAX_RANGE_INPUT: number = 9999;
const PRICE_GAP: number = 1000;

interface PriceSliderProps {
  valutaText: string;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ valutaText }) => {
  const [minVal, setMinVal] = React.useState<any>(1000);
  const [maxVal, setMaxVal] = React.useState<any>(9999);

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setMinVal(e.target.value);
    }
  };
  const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setMaxVal(e.target.value);
    }
  };

  const clickMin = (e: React.MouseEvent<HTMLInputElement>) => {
    if (maxVal - minVal < PRICE_GAP) {
      setMinVal(+maxVal - PRICE_GAP);
    }
  };
  const clickMax = (e: React.MouseEvent<HTMLInputElement>) => {
    if (maxVal - minVal < PRICE_GAP) {
      setMaxVal(+minVal + PRICE_GAP);
    }
  };

  const positionLeft: string = (+minVal / MAX_RANGE_INPUT) * 100 + "%";
  const positionRight: string = 100 - (+maxVal / MAX_RANGE_INPUT) * 100 + "%";

  return (
    <>
      <div className="price-input">
        <div className="field">
          <input
            type="number"
            className="input-min"
            value={minVal}
            onChange={onChangeMin}
          />
          <span>{valutaText}</span>
        </div>
        <div className="separator">-</div>
        <div className="field">
          <input
            type="number"
            className="input-max"
            value={maxVal}
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
          value={minVal}
          onChange={onChangeMin}
          onMouseUp={clickMin}
        />
        <input
          className="range-max"
          type="range"
          min={MIN_RANGE_INPUT}
          max={MAX_RANGE_INPUT}
          value={maxVal}
          onChange={onChangeMax}
          onMouseUp={clickMax}
        />
      </div>
    </>
  );
};

export default PriceSlider;
