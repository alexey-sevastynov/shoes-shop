import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.novaposhta.ua/v2.0/json/";

export interface IWarehouseDescription {
  description: string;
}

export interface IWarehouses {
  city: string;
  type: string;
  totalCount: number;
  data: IWarehouseDescription[];
}

const NP_API_KEY = "9bb8f3a4087c2ec455b7e1cd7310f4c5";

export const fetchNp = createAsyncThunk<
  IWarehouses,
  string[],
  { rejectValue: string }
>("warehouses/fetchWarehouses", async (args, { rejectWithValue }) => {
  const [city, typeOFWarehouse] = args;

  try {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
        TypeOfWarehouseRef: typeOFWarehouse,
      },
    });

    if (!response.data.success) {
      return response.data.errors[0];
    } else if (!response.data.data.length) {
      return "У населеному пункті вказаний тип відділень не знайдено";
    } else {
      const description = response.data.data.map(
        (elem: Record<string, any>) => {
          return {
            description: elem.Description,
          };
        }
      );

      return {
        city: city,
        type: typeOFWarehouse,
        totalCount: response.data.info.totalCount,
        data: description,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
