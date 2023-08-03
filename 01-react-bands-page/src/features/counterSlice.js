import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  valueHundred: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      state.valueHundred = state.valueHundred + 100;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
