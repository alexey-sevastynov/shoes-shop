import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getFavoriteFromLocalStorage } from "../../utils/getFavoriteFromLocalStorage";

type FavoriteItem = {
  article?: string;
  id: number;
  imageURL?: string[];
  name?: { ua: string; en: string };
  sale: boolean;
  price: number;
  priceSale: number;
  isFavorite?: boolean;
};

interface favoriteSliceState {
  itemsFavorite: FavoriteItem[];
}

const initialState: favoriteSliceState = {
  itemsFavorite: getFavoriteFromLocalStorage(),
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const findItem = state.itemsFavorite.find(
        (obj) => obj.id === action.payload.id
      );

      if (state.itemsFavorite.find((obj) => obj === findItem)) {
        return;
      } else {
        state.itemsFavorite.push({ ...action.payload });
      }
    },

    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const findItem = state.itemsFavorite.find(
        (obj) => obj.id === action.payload.id
      );

      if (state.itemsFavorite.find((obj) => obj === findItem)) {
        state.itemsFavorite = state.itemsFavorite.filter(
          (obj) => obj.id !== action.payload.id
        );
      } else {
        state.itemsFavorite.push({ ...action.payload });
      }
    },

    removeFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.itemsFavorite = state.itemsFavorite.filter(
        (obj) => obj.id !== action.payload.id
      );
    },
  },
});

export const selectorFavorite = (state: RootState) => state.favorite;

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
