import React from "react";
import Favorite from "../components/favorite/Favorite";

interface FavoritePageProps {}

const FavoritePage: React.FC<FavoritePageProps> = () => {
  return (
    <>
      <Favorite />
    </>
  );
};

export default FavoritePage;
