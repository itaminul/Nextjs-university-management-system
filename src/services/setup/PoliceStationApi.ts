
import { PoliceStation } from '@/app/components/setup/policeStation/policeStationType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;

export const policeStationApi = createApi({
  reducerPath: 'policeStationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPoliceStationApiData: builder.query<PoliceStation[], void>({
      query: () => 'policeStation',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          thanaName: item.thanaName,
          thanaDes: item.thanaDes,
          orgId: item.orgId,
          activeStatus: item.activeStatus,
        }));
        return formattedData;
      },
    }),
    createPoliceStation: builder.mutation<
      PoliceStation,
      Partial<PoliceStation>
    >({
      query: (data) => ({
        url: 'employee',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetPoliceStationApiDataQuery, useCreatePoliceStationMutation } = policeStationApi;