import { CreateEmployeeProps, AllEmpInformation } from "@/app/components/employee/EmployeeType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const employeeInformationApi = createApi({
  reducerPath: 'EmployeeInformationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getEmployeeInformation: builder.query<CreateEmployeeProps[], void>({
      query: () => 'employee',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          firstName: item.firstName,
          middleName: item.middleName,
          fullName: item.fullName,
          phone: item.phone,
          mobileOne: item.mobileOne,
          mobileTwo: item.mobileTwo,
          emergencyMobile: item.emergencyMobile,
          officeEmail: item.officeEmail,
          personalEmail: item.personalEmail,
          departmentId: item.departmentId,
          religionId: item.religionId,
          orgId: item.orgId,
          activeStatus: item.activeStatus,
        }));
        return formattedData;
      },
      
    }),
    createEmployeeInformation: builder.mutation<AllEmpInformation, Partial<AllEmpInformation>>({
      query: (data) => ({
        url: 'employee',
        method: 'POST',
        body: data

      })
    })
  })
})

export const { useGetEmployeeInformationQuery,useCreateEmployeeInformationMutation} = employeeInformationApi;