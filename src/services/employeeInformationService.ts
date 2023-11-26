import { CreateEmployeeProps } from "@/app/components/employee/EmployeeType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const EmployeeInformation = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getDepartmentSetup: builder.query<CreateEmployeeProps[], void>({
      query: () => 'departmentSetup',
      transformResponse: (response: any) => {
        console.log('formattedData', response);
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
  })
})