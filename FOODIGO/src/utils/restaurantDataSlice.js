import { createSlice } from "@reduxjs/toolkit";
import { delhiLat, delhiLng } from "./Constant";

const restaurantDataSlice = createSlice({
  name: 'restaurantData',
  initialState: {
    resData: null,
    lat: delhiLat,
    lng: delhiLng,
    locationData: "Delhi, India",
  },
  reducers: {
    updateResData: (state, action) => {
      state.resData = action.payload;
    },
    updateLat: (state, action) => {
        state.lat = action.payload;
    },
    updateLng: (state, action) => {
        state.lng = action.payload;
    },
    updateLocationData: (state, action) => {
        state.locationData = action.payload;
    },
  },
});


export const { updateResData, updateLat, updateLng, updateLocationData } = restaurantDataSlice.actions;

export default restaurantDataSlice.reducer;