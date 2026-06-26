import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.js";

export const counterStore = configureStore({
  reducer: { counter: counterReducer },
});
