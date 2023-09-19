import { configureStore } from "@reduxjs/toolkit";
import cartRecucer from "./cartSlice";

const appStore = configureStore({
  reducer: { store: cartRecucer },
});

export default appStore;
