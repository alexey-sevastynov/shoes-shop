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

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

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
  sizes: number[];
};

interface ShoesSliceState {
  status: Status;
  items: ShoesItem[];
  id: number;
  currentItem: ShoesItem;
}

const initialState: ShoesSliceState = {
  status: Status.LOADING,
  items: [],
  id: 0,
  currentItem: {
    article: "",
    category: "",
    color: { ua: "", en: "" },
    country: { ua: "", en: "" },
    heelHight: { ua: "", en: "" },
    id: 0,
    imageURL: [],
    material: { ua: "", en: "" },
    materialBottom: { ua: "", en: "" },
    name: { ua: "", en: "" },
    price: 0,
    priseSale: 0,
    sale: false,
    season: { ua: "", en: "" },
    sizes: [36, 37, 38, 39, 40, 41],
  },
};

export const shoesSlise = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ShoesItem[]>) {
      state.items = action.payload;
    },
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setObjShoe(state, action: PayloadAction<ShoesItem>) {
      state.currentItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoes.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchShoes.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectorShoesData = (state: RootState) => state.shoes;

export const { setItems, setId, setObjShoe } = shoesSlise.actions;

export default shoesSlise.reducer;
