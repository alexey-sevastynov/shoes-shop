import React from "react";

import arrowLeft from "../assets/image/arrowLeft.png";
import arrowRight from "../assets/image/arrowRight.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { selectorShoesData } from "../redux/slices/shoes";

interface FotoKaruselProps {}

const KaruselPage: React.FC<FotoKaruselProps> = () => {
  const { currentItem } = useAppSelector(selectorShoesData);
  const { imageURL } = currentItem;

  const firstFoto = imageURL[0];

  const [id, setId] = React.useState(1);
  const [src, setSrc] = React.useState(firstFoto);
  const [backgroundImage, setBackgroundImage] = React.useState(`url(${src})`);
  const [backgroundPosition, setBackgroundPosition] = React.useState("0% 0%");

  //_____find out the type funktion handleMouseMove  (any?????????)
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  React.useEffect(() => {
    setSrc(imageURL[id - 1]);
    setBackgroundImage(`url(${imageURL[id - 1]})`);
  }, [id]);

  const onClickImage = (url: string) => {
    const index = url.indexOf("_");
    const idSrc = +url[index + 1]; // 0,1,2,3,4,5
    setSrc(url);
    setBackgroundImage(`url(${url})`);
    setId(idSrc);
  };

  const onClickLeft = () => {
    if (id < 2) {
      console.log("<1", id);
      setId(5);
      setSrc(imageURL[5]);
      setBackgroundImage(`url(${imageURL[5]})`);
    } else {
      setId((prev) => prev - 1);
      setBackgroundImage(`url(${imageURL[id - 1]})`);
    }
  };
  const onClickRight = () => {
    if (id > 4) {
      setId(1);
      setSrc(imageURL[1]);
      setBackgroundImage(`url(${imageURL[1]})`);
    } else {
      setId((prev) => prev + 1);
      setSrc(imageURL[id + 1]);
      setBackgroundImage(`url(${imageURL[id + 1]})`);
    }
  };

  const showShoesFooter = imageURL.map((image, indexId) => {
    if (indexId + 1 === id) {
      return (
        <div className="futer-foto">
          <img className="active-foto" src={image} alt="foto" />
          <div className="active" />
        </div>
      );
    }
    return (
      <div
        key={image}
        className="futer-foto"
        onClick={() => onClickImage(image)}
      >
        <img src={image} alt="foto" />
      </div>
    );
  });
  return (
    <div className="karusel">
      <div className="karusel-main">
        <img
          className="arrow"
          onClick={onClickLeft}
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
          onClick={onClickRight}
          src={arrowRight}
          alt="left"
          height={40}
          width={40}
        />
        <Link to="/description">
          <div className="close-block">
            <div className="close" />
          </div>
        </Link>
      </div>
      <div className="karusel-futer">{showShoesFooter}</div>
    </div>
  );
};

export default KaruselPage;
