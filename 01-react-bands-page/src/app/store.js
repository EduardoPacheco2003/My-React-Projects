import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authReducer from "../features/authSlice";
import bandReducer from "../features/bandSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    band: bandReducer,
  },
});
