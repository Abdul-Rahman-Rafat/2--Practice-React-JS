import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: "intial",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeState: (State, action) => {
      console.log("the state is ", State.result);
      State.result = "changed";
      console.log("the state become ", State.result);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState } = weatherSlice.actions;

export default weatherSlice.reducer;
