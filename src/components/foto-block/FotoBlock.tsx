import React from "react";
import styles from "./fotoBlock.module.scss";

interface FotoBlockProps {
  image: string[];
}

const FotoBlock: React.FC<FotoBlockProps> = ({ image }) => {
  return (
    <div className={styles.root}>
      {image.map((foto, id) => {
        if (id >= 2) {
          return (
            <img key={foto} src={foto} alt="shoe" style={{ width: "200px" }} />
          );
        }

        return <img key={foto} src={foto} alt="shoe" />;
      })}
    </div>
  );
};

export default FotoBlock;
