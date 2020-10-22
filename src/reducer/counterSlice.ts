import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => (state = state += 1),
    decrement: (state) => (state = state -= 1),
  },
});

export const { decrement, increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
