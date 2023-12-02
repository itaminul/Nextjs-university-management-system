import { policeStation } from "@/app/components/setup/policeStation/PoliceStationType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`

export const policeStationApi = createApi({
  reducerPath: 'policeStationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getPoliceStationApiData: builder.query<policeStation[], void>({
    query: () => 'policeStation',
    transformResponse:(response: any) => {
      const formattedData= response.results?.map((item:any) => ({
        id: item.id,
        thanaName: item.thanaName,
        thanaDes: item.thanaDes,
        orgId: item.orgId,
        activeStatus: item.activeStatus,
      }))
      return formattedData;
    }
    })
  })
})

export const { useGetPoliceStationApiDataQuery } = policeStationApi;