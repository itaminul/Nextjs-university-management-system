import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from '../redux/features/modalSlice'
import breadcrumbReducer from '../redux/features/breadcrumbSlice';
import authReducer from '../redux/features/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { departmentSetupApi } from '@/services/setup/departmentSetupApi';


const rootReducer = combineReducers({
  breadcrumbs: breadcrumbReducer,
  modal: modalReducer,
  authReducer,
  [departmentSetupApi.reducerPath]: departmentSetupApi.reducer,
});

const middleware = (getDefaultMiddleware: () => any[]) =>
  getDefaultMiddleware().concat([departmentSetupApi.middleware]);
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
