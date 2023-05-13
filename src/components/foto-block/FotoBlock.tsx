import React from "react";
import styles from "./fotoBlock.module.scss";
import { Link } from "react-router-dom";

interface FotoBlockProps {
  image: string[];
}

const FotoBlock: React.FC<FotoBlockProps> = ({ image }) => {
  return (
    <div className={styles.root}>
      {image.map((foto, id) => {
        if (id >= 2) {
          return (
            <Link to="/karusel">
              <img
                key={foto}
                src={foto}
                alt="shoe"
                style={{ width: "200px" }}
              />
            </Link>
          );
        }

        return (
          <Link to="/karusel">
            <img key={foto} src={foto} alt="shoe" />
          </Link>
        );
      })}
    </div>
  );
};

export default FotoBlock;
