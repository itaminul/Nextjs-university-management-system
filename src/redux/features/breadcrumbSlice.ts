import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Breadcrumb {
  home: string;
  homePath: string;
  label: string;
  path: string;
}
interface BreadcrumbState {
  breadcrumbs: Breadcrumb[]
}
const initialState: BreadcrumbState = {
  breadcrumbs: []
}
const breadcrumbSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setBreadCrumbs: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    }
  }
})
export const { setBreadCrumbs } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;