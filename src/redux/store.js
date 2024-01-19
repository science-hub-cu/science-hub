// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApiReducer } from "../services/auth/authApi";
import { authApi } from "../services/auth/authApi";
import AuthSlice from "./AuthSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  authApi: authApiReducer,
  auth: AuthSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store= configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(authApi.middleware),
});
const persistor = persistStore(store);
export {store, persistor};


