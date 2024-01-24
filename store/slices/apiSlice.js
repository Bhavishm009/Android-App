import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://fullstack-app-8urj.onrender.com"
  }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => "/api/getall", // Endpoint URL
      providesTags: ["user"],
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/register",
        method: "POST",
        body: userData, // Assuming userData is an object containing registration data
        invalidatesTags: ["user"],
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ id, otp }) => ({
        url: `/api/verifyaccount/${id}/${otp}`, // Assuming this is the endpoint for verifying OTP
        method: "GET", // You may need to adjust the method
        invalidatesTags: ["user"], // Assuming this invalidates the user tag
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/api/login",
        method: "POST",
        body: userData, // Assuming userData is an object containing login data
      }),
    }),
    profile: builder.mutation({
      query: (userData) => ({
        url: `/api/users/${userData.id}`,
        method: "GET",
        body: userData, // Assuming userData is an object containing login data
      }),
    }),
  }),
});

export const {
  useFetchDataQuery,
  useRegisterMutation,
  useLoginMutation,
  useVerifyOtpMutation,
} = api;
