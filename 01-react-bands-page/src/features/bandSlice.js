import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  description: "",
};

export const bandSlice = createSlice({
  name: "band",
  initialState,
  reducers: {
    setbandData: (state, action) => {
      const { id, name, description } = action.payload;
      state.id = id;
      state.name = name;
      state.description = description.plain;
    },
  },
});

export const { setbandData } = bandSlice.actions;

export default bandSlice.reducer;
