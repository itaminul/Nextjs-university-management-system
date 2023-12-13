import { Designation } from "@/app/components/setup/designation/DesignationType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const designationSetupApi = createApi({
  reducerPath: 'designationSetupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getDesignationSetup: builder.query<Designation[], void>({
      query: () => 'designationSetup',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: Designation) => ({
          id: item.id,
          designationName: item.designationName,
          designationDes: item.designationDes,
          orgId: item.orgId,
          activeStatus: item.activeStatus,
        }));
        return formattedData;
      },
    }),
    createDesignation: builder.mutation<Designation, Partial<Designation>>({
      query: (designationData) => ({
        url: 'designationSetup',
        method: 'POST',
        body: designationData,
      }),
    }),
  }),
});

export const { useGetDesignationSetupQuery, useCreateDesignationMutation } = designationSetupApi;

