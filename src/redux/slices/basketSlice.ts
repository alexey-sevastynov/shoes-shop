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
}

const initialState: basketSliceState = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
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
  },
});

export const selectorBasket = (state: RootState) => state.basket;

export const { addItem, removeItem, minusItem, plusItem } = basketSlice.actions;
export default basketSlice.reducer;
