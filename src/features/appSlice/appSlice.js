import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  scroll: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { setLoading, setScroll } = appSlice.actions;

export default appSlice.reducer;
