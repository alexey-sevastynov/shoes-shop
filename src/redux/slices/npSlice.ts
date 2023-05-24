import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
// import { fetchNp } from "../../api/np";

const NP_API_KEY = "9bb8f3a4087c2ec455b7e1cd7310f4c5";
const API_URL = "https://api.novaposhta.ua/v2.0/json/";

export const fetchNp = createAsyncThunk<npSliceState[]>(
  "np/fetchByIdStatus",
  async () => {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {},
    });
    return response.data.data;
  }
);

type itemNp = {
  description: string[];
  descriptionRu: string[];
  areaDescription: string[];
  areaDescriptionRu: string[];
};

interface npSliceState {
  itemsNp: itemNp[];
  allRegions: string[];
  allCity: string[];
  activeRegion: string;
  activeCity: string;
  cityRef: string;
}

const initialState: npSliceState = {
  itemsNp: [],
  allRegions: [],
  allCity: [],
  activeRegion: "",
  activeCity: "",
  cityRef: "",
};

const npSlice = createSlice({
  name: "np",
  initialState,
  reducers: {
    getAllRegions: (state, action) => {
      const description = action.payload.map((elem: Record<string, any>) => {
        return {
          // description: elem.Description,
          // descriptionRu: elem.DescriptionRu,
          areaDescription: elem.AreaDescription,
          // areaDescriptionRu: elem.AreaDescriptionRu,
        };
      });

      const newArray = description.map((item: any) => item.areaDescription);
      const uniqueRegions: string[] = Array.from(new Set(newArray));
      state.allRegions = uniqueRegions;
    },

    getActiveRegion: (state, action) => {
      state.activeRegion = action.payload;
    },
    getActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    getActiveRef: (state, action) => {
      const description = action.payload.map((elem: Record<string, any>) => {
        return {
          description: elem.Description,
          ref: elem.Ref,
        };
      });

      const res = description.find(
        (item: any) => item.description === state.activeCity
      );

      if (res) {
        state.cityRef = res.ref;
      }
    },
    clearRef: (state, action) => {
      state.cityRef = action.payload;
    },

    getCitiesRegion: (state, action) => {
      const description = action.payload.map((elem: Record<string, any>) => {
        return {
          description: elem.Description,
          areaDescription: elem.AreaDescription,
        };
      });

      const newArray = description.filter(
        (item: any) => item.areaDescription === state.activeRegion
      );

      state.allCity = newArray.map((item: any) => item.description);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNp.pending, (state, action) => {
      state.itemsNp = [];
    });
    builder.addCase(fetchNp.fulfilled, (state, action) => {
      //@ts-ignore
      state.itemsNp = action.payload;
    });
    builder.addCase(fetchNp.rejected, (state, action) => {
      state.itemsNp = [];
    });
  },
});

export const {
  getAllRegions,
  getActiveRegion,
  getCitiesRegion,
  getActiveCity,
  getActiveRef,
  clearRef,
} = npSlice.actions;

export default npSlice.reducer;
