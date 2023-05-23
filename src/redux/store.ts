import { configureStore } from "@reduxjs/toolkit";
import i18nSlice from "./slices/i18nSlice";
import headerSlice from "./slices/headerSlice";
import shoesSlise from "./slices/shoes";
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import favoriteSlice from "./slices/favoriteSlice";
import npSlice from "./slices/npSlice";
import npPointsSlice from "./slices/npPoints";

const store = configureStore({
  reducer: {
    i18n: i18nSlice,
    header: headerSlice,
    shoes: shoesSlise,
    filter: filterSlice,
    basket: basketSlice,
    favorite: favoriteSlice,
    np: npSlice,
    npPoints: npPointsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
