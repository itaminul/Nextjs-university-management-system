import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
interface DataType {
  key: React.Key;
  departmentName: string;
  departmentDescription: string;
}
const BASE_URL = 'http://localhost:4001/api/';
console.log('BASE_URL', BASE_URL);
const accessToken = localStorage.getItem('accessToken');
export const departmentSetupApi = createApi({
  reducerPath: 'departmentSetupApi',
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
      query: () => 'departmentSetup',
      transformResponse: (response: any) => {
        console.log('formattedData', response);
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          departmentName: item.departmentName,
          departmentDescription: item.departmentDescription,
        }));
        return formattedData;

      },
      
    }),
    
  }),
});

export const {useGetDepartmentSetupQuery} = departmentSetupApi;


