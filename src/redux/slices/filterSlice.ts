import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TypeItem = {
  ua: string;
  en: string;
  checked: boolean;
};

type SortItem = {
  sortProperty: "rating" | "priceSale" | "-priceSale";
  en: string;
  ua: string;
};

interface FilterSliceState {
  categoryId: number;
  sort: SortItem;
  types: TypeItem[];
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    en: "popular (DESC)",
    ua: "по популярності",
    sortProperty: "rating",
  },
  types: [
    { ua: "Туфлі", en: "Shoes", checked: false },
    { ua: "Балетки", en: "Ballet", checked: false },
    { ua: "Кросівки", en: "Sneakers", checked: false },
    { ua: "Босоніжки", en: "Sandals", checked: false },
    { ua: "Черевики", en: "Boots", checked: false },
    { ua: "Ботильйони", en: "Ankle boots", checked: false },
    { ua: "Ботфорти", en: "Jackboots", checked: false },
  ],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
    setTypes: (state, action: PayloadAction<number>) => {
      state.types = state.types.map((obj, currentIndex) => {
        return currentIndex === action.payload
          ? { ...obj, checked: !obj.checked }
          : obj;
      });
    },
  },
});

export const selectorSort = (state: RootState) => state.filter;

export const { setSort, setTypes } = filterSlice.actions;

export default filterSlice.reducer;
