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
  },
});

export const { sum } = calcSlice.actions;
export default calcSlice.reducer;
