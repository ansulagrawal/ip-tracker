import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ipSlice } from "./api/ipSlice";
import ipReducer from "./api/ipSlice";

export const store = configureStore({
  reducer: {
    ipReducer: ipReducer,
    [ipSlice.reducerPath]: ipSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ipSlice.middleware),
});

setupListeners(store.dispatch);
