import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.value = true;
    },
  },
});

export const { logIn } = authSlice.actions;

export default authSlice.reducer;
