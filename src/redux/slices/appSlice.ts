import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
