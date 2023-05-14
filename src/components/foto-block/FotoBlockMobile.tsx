import React from "react";
import styles from "./fotoBlock.module.scss";

interface FotoBlocMobilekProps {
  image: string[];
}

const FotoBlockMobile: React.FC<FotoBlocMobilekProps> = ({ image }) => {
  return (
    <div className={styles.FotoBlockMobile}>
      {image.map((foto, id) => {
        return <img key={id} src={foto} alt="shoe" />;
      })}
    </div>
  );
};

export default FotoBlockMobile;
