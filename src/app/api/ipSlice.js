import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ipSlice = createApi({
  reducerPath: "ipSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://geo.ipify.org/api/v2/" }),
  endpoints: builder => ({
    getIpData: builder.query({
      query: data => ({
        url: "country,city",
        params: {
          apiKey: import.meta.env.VITE_GEO_API_KEY,
          ipAddress: data,
        },
      }),
    }),
  }),
});

const ipReducer = createSlice({
  name: "ipReducer",
  initialState: { loading: false, result: {}, error: {}, isError: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(ipSlice.endpoints.getIpData.matchPending, state => {
        state.loading = true;
      })
      .addMatcher(ipSlice.endpoints.getIpData.matchFulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addMatcher(ipSlice.endpoints.getIpData.matchRejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default ipReducer.reducer;
export const { useLazyGetIpDataQuery } = ipSlice;
