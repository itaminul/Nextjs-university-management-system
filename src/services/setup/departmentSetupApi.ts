import { Departments } from "@/app/components/setup/department/CreateDepartmentType";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
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
    getDepartmentSetup: builder.query<Departments[], void>({
      query: () => 'departmentSetup',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          departmentName: item.departmentName,
          departmentDescription: item.departmentDescription,
          orgId: item.orgId,
          activeStatus: item.activeStatus,
        }));
        return formattedData;
      },
    }),
    createDepartmentSetup: builder.mutation<Departments, Partial<Departments>>({
      query: (newDepartment) => ({
        url: 'departmentSetup',
        method: 'POST',
        body: newDepartment,
      }),
    }),
    updateDepartmentsSetup: builder.mutation<
      void,
      { id: number; formData: Departments }
    >({
      query: (data) => ({
        url: `/departmentSetup/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {useGetDepartmentSetupQuery, useCreateDepartmentSetupMutation, useUpdateDepartmentsSetupMutation} = departmentSetupApi;


