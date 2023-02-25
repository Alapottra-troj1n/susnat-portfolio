import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
