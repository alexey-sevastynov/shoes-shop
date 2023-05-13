import React from "react";

import arrowLeft from "../assets/image/arrowLeft.png";
import arrowRight from "../assets/image/arrowRight.png";
import zoom from "../assets/image/zoom.png";
import { Link } from "react-router-dom";

const src: string =
  "https://respect-shoes.com.ua/image/data/products/IS73-153225/IS73-153225_4.jpg";

interface FotoKaruselProps {}

const KaruselPage = () => {
  const [backgroundImage, setBackgroundImage] = React.useState(`url(${src})`);
  const [backgroundPosition, setBackgroundPosition] = React.useState("0% 0%");

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };
  return (
    <div className="karusel">
      <div className="karusel-main">
        <img
          className="arrow"
          src={arrowLeft}
          alt="left"
          height={40}
          width={40}
        />
        <figure
          style={{
            backgroundImage: `${backgroundImage}`,
            backgroundPosition: `${backgroundPosition}`,
          }}
        >
          <img
            className="karusel-foto"
            src={src}
            onMouseMove={handleMouseMove}
            alt="foto"
          />
        </figure>

        <img
          className="arrow"
          src={arrowRight}
          alt="left"
          height={40}
          width={40}
        />
        <Link to="/description">
          <div className="close" />
        </Link>
      </div>
      <div className="karusel-futer">
        <div className="futer-foto">
          <img
            className="active-foto"
            src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-76x101.jpg"
            alt="foto"
          />
          <div className="active" />
        </div>
        <div className="futer-foto">
          <img
            src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-76x101.jpg"
            alt="foto"
          />
        </div>
        <div className="futer-foto">
          <img
            src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-76x101.jpg"
            alt="foto"
          />
        </div>
        <div className="futer-foto">
          <img
            src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-76x101.jpg"
            alt="foto"
          />
        </div>
        <div className="futer-foto">
          <img
            src="https://respect-shoes.com.ua/image/cache/data/products/IS73-153225/IS73-153225-1-76x101.jpg"
            alt="foto"
          />
        </div>
      </div>
    </div>
  );
};

export default KaruselPage;
