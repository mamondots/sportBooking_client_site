/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }

        return { url: "/facility", method: "GET", params };
      },
      providesTags: ["facility"],
    }),

    getSingleFacilities: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["facility"],
    }),

    addFacility: builder.mutation({
      query: (data) => ({
        url: "/facility/create_facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),

    updateFacilities: builder.mutation({
      query: ({ id, updatedFacility }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: updatedFacility,
      }),
      invalidatesTags: ["facility"],
    }),

    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useGetFacilitiesQuery,
  useGetSingleFacilitiesQuery,
  useAddFacilityMutation,
  useUpdateFacilitiesMutation,
  useDeleteFacilitiesMutation,
} = facilitiesApi;
