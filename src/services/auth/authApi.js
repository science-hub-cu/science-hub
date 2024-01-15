// authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://science-hub.azurewebsites.net/api/v1/",
  }),
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    CheckAuth: builder.mutation({
      query: (token) => ({
        url: "auth/me",
        method: "GET",
        params: token,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useCheckAuthMutation } =
  authApi;
export const { reducer: authApiReducer } = authApi;
