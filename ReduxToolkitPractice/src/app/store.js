import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/Calcs/calcSlice";

export const store = configureStore({
  reducer: {
    //calc or any name
    calc: calcReducer,
  },
});
