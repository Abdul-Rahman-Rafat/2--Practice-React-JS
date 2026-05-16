import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    sum: (currentState, action) => {
      console.log("calling sum from calcSlice (function createSlice)");
      const summtion =
        Number(action.payload.fnum) + Number(action.payload.snum);

      console.log("summtion is ", summtion);
      currentState.result = summtion;
    },

    sub: (currentState, action) => {
      console.log("calling sub from calcSlice (function createSlice)");
      const subtraction =
        Number(action.payload.fnum) - Number(action.payload.snum);

      console.log("subtraction is ", subtraction);
      currentState.result = subtraction;
    },
    mult: (currentState, action) => {
      const multiplication =
        Number(action.payload.fnum) * Number(action.payload.snum);
      currentState.result = multiplication;
    },
    divide: (currentState, action) => {
      const divsion = Number(action.payload.fnum) / Number(action.payload.snum);
      currentState.result = divsion;
    },
  },
});

export const { sum, sub, mult, divide } = calcSlice.actions;
export default calcSlice.reducer;
