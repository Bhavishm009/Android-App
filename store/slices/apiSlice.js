// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fullstack-app-8urj.onrender.com",
  method: "GET",
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => "/api/githubjson", // Endpoint URL
    }),
  }),
});

export const { useFetchDataQuery } = api;
