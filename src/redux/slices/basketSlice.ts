import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type BasketItem = {
  article?: string;
  id: number;
  imageURL?: string[];
  name?: { ua: string; en: string };
  priceSale: number;
  sizes?: number;
  count?: any;
  totalPrice?: number;
};

interface basketSliceState {
  totalCount?: number;
  totalPrice: number;
  items: BasketItem[];
  valueSurName: string;
  valueName: string;
  valuePaternalName: string;
  valueMobile: string;
  isCallBack: boolean;
  valueEmail: string;
  valueComent: string;
}

const initialState: basketSliceState = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
  valueSurName: "",
  valueName: "",
  valuePaternalName: "",
  valueMobile: "",
  isCallBack: false,
  valueEmail: "",
  valueComent: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.sizes === action.payload.sizes
      );

      if (findItem) {
        findItem.count++;
        findItem.totalPrice = findItem.count * action.payload.priceSale;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
          totalPrice: action.payload.priceSale,
        });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.priceSale * obj.count + sum,
        0
      );

      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; sizes: number }>
    ) => {
      state.items = state.items.filter((obj) => {
        return (
          obj.id !== action.payload.id || obj.sizes !== action.payload.sizes
        );
      });
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.priceSale * obj.count + sum,
        0
      );
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
    },

    minusItem: (
      state,
      action: PayloadAction<{ id: number; sizes: number; priceSale: number }>
    ) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.sizes === action.payload.sizes
      );

      if (findItem) {
        findItem.count--;
        findItem.totalPrice = findItem.count * action.payload.priceSale;
        state.totalPrice = state.items.reduce(
          (sum, obj) => obj.priceSale * obj.count + sum,
          0
        );
        state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
      }
    },
    plusItem: (
      state,
      action: PayloadAction<{ id: number; sizes: number; priceSale: number }>
    ) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.sizes === action.payload.sizes
      );

      if (findItem) {
        findItem.count++;
        findItem.totalPrice = findItem.count * action.payload.priceSale;
        state.totalPrice = state.items.reduce(
          (sum, obj) => obj.priceSale * obj.count + sum,
          0
        );
        state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
      }
    },
    setValueSurName: (state, action: PayloadAction<string>) => {
      state.valueSurName = action.payload;
    },
    setValueName: (state, action: PayloadAction<string>) => {
      state.valueName = action.payload;
    },
    setValuePaternalName: (state, action: PayloadAction<string>) => {
      state.valuePaternalName = action.payload;
    },
    setValueMobile: (state, action: PayloadAction<string>) => {
      state.valueMobile = action.payload;
    },
    setValueEmail: (state, action: PayloadAction<string>) => {
      state.valueEmail = action.payload;
    },
    setValueComent: (state, action: PayloadAction<string>) => {
      state.valueComent = action.payload;
    },
    toggleIsCallBack: (state, action: PayloadAction<boolean>) => {
      // const toggle = (input: boolean) => !input;
      state.isCallBack = action.payload;
    },
  },
});

export const selectorBasket = (state: RootState) => state.basket;

export const {
  addItem,
  removeItem,
  minusItem,
  plusItem,
  setValueSurName,
  setValueName,
  setValuePaternalName,
  setValueMobile,
  toggleIsCallBack,
  setValueEmail,
  setValueComent,
} = basketSlice.actions;
export default basketSlice.reducer;
