// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApiReducer } from "../services/auth/authApi";
import { authApi } from "../services/auth/authApi";
import AuthSlice from "./AuthSlice";

export default configureStore({
  reducer: {
    authApi: authApiReducer,
    auth: AuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
