import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    clearRestaurant: (state) => {
      state.restaurant = {};
    },
  },
});

export const { setRestaurant, clearRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
