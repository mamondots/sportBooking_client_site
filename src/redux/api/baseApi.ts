import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://assirenment-03.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["facility"],
  endpoints: () => ({}),
});
