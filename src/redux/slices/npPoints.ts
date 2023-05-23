import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
// import { fetchNp } from "../../api/np";

const NP_API_KEY = "9bb8f3a4087c2ec455b7e1cd7310f4c5";
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

interface npPointsItem {
  SiteKey: string;
  Description: string;

  TypeOfWarehouse: string;
  Ref: string;
  Number: number;
  CityDescription: string;
}

type FetchShoesArgs = {
  cityRef?: string;
};

export const fetchPointNp = createAsyncThunk<npSliceState[], FetchShoesArgs>(
  "npPoints/fetchByIdStatus",
  async (params) => {
    const { cityRef } = params;
    console.log(cityRef);

    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: cityRef,
      },
    });
    return response.data.data;
  }
);

interface npSliceState {
  itemsPointsNp: npPointsItem[];
  allBranches: string[];
  activeBranch: string;
}

const initialState: npSliceState = {
  itemsPointsNp: [],
  allBranches: [],
  activeBranch: "",
};

const npPointsSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    getAllBranches: (state, action) => {
      const description = action.payload.map((elem: Record<string, any>) => {
        return {
          description: elem.Description,
        };
      });
      const newArray = description.map((item: any) => item.description);
      const uniqueRegions: string[] = Array.from(new Set(newArray));
      state.allBranches = uniqueRegions;
    },
    getActiveBranch: (state, action) => {
      state.activeBranch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPointNp.pending, (state, action) => {
      state.itemsPointsNp = [];
    });
    builder.addCase(fetchPointNp.fulfilled, (state, action) => {
      //@ts-ignore
      state.itemsPointsNp = action.payload;
    });
    builder.addCase(fetchPointNp.rejected, (state, action) => {
      state.itemsPointsNp = [];
    });
  },
});

export const { getAllBranches, getActiveBranch } = npPointsSlice.actions;

export default npPointsSlice.reducer;
