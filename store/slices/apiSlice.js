// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NODE_ENV ==="development"? process.env.REACT_APP_LOCAL_URL :process.env.REACT_APP_BACKEND_URL,
  method: "GET",
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => "/api/githubjson", // Endpoint URL
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/register",
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
