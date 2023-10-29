import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "../redux/features/breadcrumbSlice";
import authReducer from '../redux/features/authSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbReducer,
    authReducer,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;