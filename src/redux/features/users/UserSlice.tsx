/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John" },
  { id: "1", name: "Young" },
  { id: "3", name: "Doe" },
];

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: any) => state.users;

export default UsersSlice.reducer;
