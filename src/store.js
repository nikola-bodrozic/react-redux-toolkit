import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./reducers/languageSlice";
import usersSlice from "./reducers/usersSlice";

export default configureStore({
  reducer: {
    language: languageSlice,
    userstt: usersSlice
  },
});
