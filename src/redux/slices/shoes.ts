import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchShoes = createAsyncThunk(
  "shoes/fetchByIdStatus",
  async (params) => {
    // const {} = params;
    const response = await axios.get("http://localhost:3001/shoes");

    return response.data;
  }
);
type ShoesItem = {
  article: string;
  category: string;
  color: { ua: string; en: string };
  country: { ua: string; en: string };
  heelHight: { ua: string; en: string };
  id: number;
  imageURL: string[];
  material: { ua: string; en: string };
  materialBottom: { ua: string; en: string };
  name: { ua: string; en: string };
  price: number;
  priseSale: number;
  sale: boolean;
  season: { ua: string; en: string };
};

interface ShoesSliceState {
  items: ShoesItem[];
}

const initialState: ShoesSliceState = {
  items: [],
};

export const shoesSlise = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ShoesItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoes.pending, (state, action) => {
      // state.status = "loading";
      console.log("...loading");
      state.items = [];
    });
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      state.items = action.payload;
      // state.status = "success";
    });
    builder.addCase(fetchShoes.rejected, (state, action) => {
      state.items = [];
      // state.status = "error";
    });
  },
});

export const selectorShoesData = (state: RootState) => state.shoes;

export const { setItems } = shoesSlise.actions;

export default shoesSlise.reducer;
