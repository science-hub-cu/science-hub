// authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://science-hub.azurewebsites.net/api/v1/" }),
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
export const { reducer: authApiReducer } = authApi; 
