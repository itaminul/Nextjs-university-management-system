import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "../redux/features/breadcrumbSlice";

export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbReducer

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;