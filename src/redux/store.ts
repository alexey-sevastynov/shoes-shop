import { configureStore } from "@reduxjs/toolkit";
import i18nSlice from "./slices/i18nSlice";
import headerSlice from "./slices/headerSlice";

const store = configureStore({
  reducer: {
    i18n: i18nSlice,
    header: headerSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
