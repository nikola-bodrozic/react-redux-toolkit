import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "EN-US",
  },
  reducers: {
    en: (state) => {
      state.value = "EN-US";
    },
    de: (state) => {
      state.value = "DE";
    },
  },
});

export const { en, de } = languageSlice.actions;
export default languageSlice.reducer;
