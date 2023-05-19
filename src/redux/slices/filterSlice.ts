import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortItem = {
  sortProperty: "rating" | "priceSale" | "-priceSale";
  en: string;
  ua: string;
};

interface FilterSliceState {
  categoryId: number;
  sort: SortItem;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    en: "popular (DESC)",
    ua: "по популярності",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
  },
});

export const selectorSort = (state: RootState) => state.filter;

export const { setSort } = filterSlice.actions;

export default filterSlice.reducer;
