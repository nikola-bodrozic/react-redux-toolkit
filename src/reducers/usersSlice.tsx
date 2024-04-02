import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<{ name: string }>) => {
      state.users.push({ id: state.users.length, name: action.payload.name});
    },
    removeName: (state) => {
      state.users.pop();
    },
  },
});

export const { addName, removeName } = usersSlice.actions;
export default usersSlice.reducer;
