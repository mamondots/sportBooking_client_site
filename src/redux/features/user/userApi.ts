import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
