import { combineReducers } from "redux";
import languageSlice from "./languageSlice";
import usersSlice from "./usersSlice";

export default combineReducers({
  languageSlice,
  usersSlice
});
