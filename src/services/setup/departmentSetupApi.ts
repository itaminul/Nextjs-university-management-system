import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}
const BASE_URL = 'http://localhost:9007'
const accessToken = localStorage.getItem('accessToken');
export const departmentSetupApi = createApi({
  reducerPath: 'itemSetupApi',
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
    getDepartmentSetup: builder.query<DataType[], void>({
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

export const {useGetDepartmentSetupQuery} = departmentSetupApi;


