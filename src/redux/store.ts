import { configureStore } from '@reduxjs/toolkit';
import { employeesSlice } from './slices';

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;