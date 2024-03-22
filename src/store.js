import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./reducers/languageSlice";

export default configureStore({
  reducer: {
    language: languageSlice,
  },
});
