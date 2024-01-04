// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApiReducer } from "../services/auth/authApi";
import { authApi } from "../services/auth/authApi";

export default configureStore({
  reducer: {
    authApi: authApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
});
