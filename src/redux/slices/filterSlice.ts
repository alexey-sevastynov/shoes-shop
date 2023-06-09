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
  searchValue: string;
  categoryId: number;
  sort: SortItem;
  types: TypeItem[];
  colors: TypeItem[];
  seasons: TypeItem[];
  sizes: { name: string; checked: boolean }[];
}

const initialState: FilterSliceState = {
  searchValue: "",
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
  colors: [
    { en: "White", ua: "Білий", checked: false },
    { en: "Beige", ua: "Бежевий", checked: false },
    { en: "Azure", ua: "Блакитний", checked: false },
    { en: "Yellow", ua: "Жовтий", checked: false },
    { en: "Green", ua: "Зелений", checked: false },
    { en: "Brown", ua: "Коричневий", checked: false },
    { en: "Multi", ua: "Мульті", checked: false },
    { en: "Pink", ua: "Рожевий", checked: false },
    { en: "Gray", ua: "Сірий", checked: false },
    { en: "Blue", ua: "Синій", checked: false },
    { en: "Violet", ua: "Фіолетовий", checked: false },
    { en: "Red", ua: "Червоний", checked: false },
    { en: "Black", ua: "Чорний", checked: false },
  ],
  seasons: [
    { en: "DEMІ", ua: "ДЕМІ", checked: false },
    { en: "WINTER", ua: "ЗИМА", checked: false },
    { en: "YEAR", ua: "РІК", checked: false },
    { en: "SUMMER", ua: "ЛІТО", checked: false },
  ],
  sizes: [
    { name: "36", checked: false },
    { name: "37", checked: false },
    { name: "38", checked: false },
    { name: "39", checked: false },
    { name: "40", checked: false },
    { name: "41", checked: false },
  ],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
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
    clearTypes: (state) => {
      state.types = state.types.map((item) => {
        return { ...item, checked: (item.checked = false) };
      });
    },
    clearType: (state, action: PayloadAction<string>) => {
      state.types = state.types.map((item) =>
        item.en === action.payload ? { ...item, checked: false } : { ...item }
      );
    },

    setColors: (state, action: PayloadAction<number>) => {
      state.colors = state.colors.map((obj, currentIndex) => {
        return currentIndex === action.payload
          ? { ...obj, checked: !obj.checked }
          : obj;
      });
    },
    clearColors: (state) => {
      state.colors = state.colors.map((item) => {
        return { ...item, checked: (item.checked = false) };
      });
    },
    clearColor: (state, action: PayloadAction<string>) => {
      state.colors = state.colors.map((item) => {
        return item.en === action.payload
          ? { ...item, checked: (item.checked = false) }
          : { ...item };
      });
    },
    setSeasons: (state, action: PayloadAction<number>) => {
      state.seasons = state.seasons.map((obj, currentIndex) => {
        return currentIndex === action.payload
          ? { ...obj, checked: !obj.checked }
          : obj;
      });
    },
    clearSeasons: (state) => {
      state.seasons = state.seasons.map((item) => {
        return { ...item, checked: (item.checked = false) };
      });
    },
    clearSeason: (state, action: PayloadAction<string>) => {
      state.seasons = state.seasons.map((item) => {
        return item.en === action.payload
          ? { ...item, checked: (item.checked = false) }
          : { ...item };
      });
    },
    setSizes: (state, action: PayloadAction<number>) => {
      state.sizes = state.sizes.map((obj, currentIndex) => {
        return currentIndex === action.payload
          ? { ...obj, checked: !obj.checked }
          : obj;
      });
    },
    clearSizes: (state) => {
      state.sizes = state.sizes.map((item) => {
        return { ...item, checked: (item.checked = false) };
      });
    },
    clearSize: (state, action: PayloadAction<string>) => {
      state.sizes = state.sizes.map((item) => {
        return item.name === action.payload
          ? { ...item, checked: (item.checked = false) }
          : { ...item };
      });
    },
  },
});

export const selectorSort = (state: RootState) => state.filter;

export const {
  setSearchValue,
  setSort,
  setTypes,
  setColors,
  setSeasons,
  setSizes,
  clearTypes,
  clearColors,
  clearSeasons,
  clearSizes,
  clearType,
  clearColor,
  clearSize,
  clearSeason,
} = filterSlice.actions;

export default filterSlice.reducer;
