import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Organizations } from "../../app/components/setup/organization/OrganizationDataType";
const BASE_URL = 'http://localhost:4001/api';
const accessToken = localStorage.getItem('accessToken');
export const organizationSetupApi = createApi({
  reducerPath: 'organizationSetupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (accessToken != null) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOrgSetup: builder.query<Organizations[], void>({
      query: () => 'organization',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          orgName: item.orgName,
          orgDescription: item.orgDescription,
        }));
        return formattedData;
      },
    }),
    createOrganization: builder.mutation<Organizations, Partial<Organizations>>(
      {
        query: (newOrganization) => ({
          url: 'organization',
          method: 'POST',
          body: newOrganization,
        }),
      },
    ),
    updateOrganizationDataById: builder.mutation<
      void,
      { id: number; formData: Organizations }
    >({
      query: (data) => ({
        url: `/organization/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {useGetOrgSetupQuery, useCreateOrganizationMutation, useUpdateOrganizationDataByIdMutation} = organizationSetupApi;