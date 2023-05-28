import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface header {
  togglePopup: boolean;
}

const initialState: header = {
  togglePopup: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    onTogglePopup: (state) => {
      const toggle = (input: boolean) => !input;
      state.togglePopup = toggle(state.togglePopup);
      //   state.togglePopup = true;
    },
    setTogglePopup: (state, action: PayloadAction<boolean>) => {
      state.togglePopup = action.payload;
    },
  },
});
export const { onTogglePopup, setTogglePopup } = headerSlice.actions;

export default headerSlice.reducer;
