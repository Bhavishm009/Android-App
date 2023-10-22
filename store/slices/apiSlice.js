import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://192.168.245.129:7000"
        : process.env.REACT_APP_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => "/api/githubjson", // Endpoint URL
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData, // Assuming userData is an object containing registration data
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/api/login",
        method: "POST",
        body: userData, // Assuming userData is an object containing login data
      }),
    }),
  }),
});

export const { useFetchDataQuery, useRegisterMutation, useLoginMutation } = api;
