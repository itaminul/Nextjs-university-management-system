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
          designationId: item.designationId,
          religionId: item.religionId,
          maritialStatus: item.maritialStatus,
          orgId: item.orgId,
          activeStatus: item.activeStatus,
          presentPSId: item.employeePresentAddress[0].presentPSId,
          presentCityCor: item.employeePresentAddress[0].presentCityCor,
          presentWord: item.employeePresentAddress[0].presentWord,
          presentVillRoad: item.employeePresentAddress[0].presentVillRoad,
          pertPSId: item.employeePermanentAddress[0].pertPSId,
          perCityCor: item.employeePermanentAddress[0].perCityCor,
          perWord: item.employeePermanentAddress[0].perWord,
          perVillRoad: item.employeePermanentAddress[0].perVillRoad
        }));
        // console.log("formattedData", formattedData);
        return formattedData;
      },
      
    }),
    createEmployeeInformation: builder.mutation<AllEmpInformation, Partial<AllEmpInformation>>({
      query: (data) => ({
        url: 'employee',
        method: 'POST',
        body: data

      })
    }),
    updateEmployeeInformation: builder.mutation<void, {id: number}>({
      query: (data) => ({
          url: `/employee/${data.id}`,
          method: 'PATCH',
          body: data
        }
      )
    })
  })
})

export const {
   useGetEmployeeInformationQuery,
   useCreateEmployeeInformationMutation,
   useUpdateEmployeeInformationMutation
  } = employeeInformationApi;