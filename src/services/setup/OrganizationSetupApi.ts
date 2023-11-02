import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Organizations } from "../../app/components/setup/organization/OrganizationDataType";
const BASE_URL = 'http://localhost:9007'
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
    getOrgSetup:builder.query<Organizations[], void> ({
      query: () => 'department',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          departmentName: item.departmentName,
          departmentDes: item.departmentDes,
        }));
        return formattedData;
      },
    })
  })

})

export const {useGetOrgSetupQuery} = organizationSetupApi;