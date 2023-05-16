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
    onTogglePopup: (state, action: PayloadAction<boolean>) => {
      const toggle = (input: boolean) => !input;
      state.togglePopup = toggle(state.togglePopup);
      //   state.togglePopup = true;
    },
  },
});
export const { onTogglePopup } = headerSlice.actions;

export default headerSlice.reducer;
