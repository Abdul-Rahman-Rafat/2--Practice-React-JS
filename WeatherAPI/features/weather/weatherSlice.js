import { createSlice } from "@reduxjs/toolkit";

//async start from here
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // import axios to make requests of APIs

export const fetchWeather = createAsyncThunk("myThunkFunction", async () => {
  //   const controller = new AbortController();
  const response = await axios.get(
    "https://api.weatherapi.com/v1/current.json",
    {
      //   signal: controller.signal,
      params: {
        key: "0657aad631fe494e8f7153133261405",
        q: "Cairo",
        aqi: "no",
      },
    },
  );
  // console.log(response.data);
  return response.data;
});

const initialState = {
  weatherState: {}, // state
  isLoading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        console.log("fetchWeather.pending");
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        console.log("fetchWeather.fulfilled");
        state.weatherState = action.payload; // action.payload is the return of api (response.data) how he know it because we use 'fetchWeather'
        console.log("fetchWeather.fulfilled and data is :", action.payload);
        state.isLoading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        console.log("fetchWeather.rejected");
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
