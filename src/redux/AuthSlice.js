import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null };

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;

export const selectUser = (state) => state.auth.user;
