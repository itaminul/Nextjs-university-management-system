import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}
const BASE_URL = 'http://localhost:9007'
export const itemSetupApi = createApi({
  reducerPath: 'itemSetupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSetupItems: builder.query<DataType[], void>({
      query: () => 'inventory-item-setup',

    })

  })
})

export const {useGetSetupItemsQuery} = itemSetupApi;


