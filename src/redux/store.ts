import { combineReducers, configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "../redux/features/breadcrumbSlice";
import authReducer from '../redux/features/authSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { itemSetupApi } from "@/services/setup/itemSetupApi";
const rootReducer = combineReducers({
  breadcrumbs: breadcrumbReducer,
    authReducer,
    [itemSetupApi.reducerPath]: itemSetupApi.reducer,

})

const middleware = (getDefaultMiddleware:() => any[]) => 
getDefaultMiddleware().concat([
  itemSetupApi.middleware
])
export const store = configureStore({
  reducer: rootReducer,
  middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;