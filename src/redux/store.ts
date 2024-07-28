import { configureStore } from '@reduxjs/toolkit';
import { employeesPositionSlice, employeesSlice } from './slices';

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    employeesPositions: employeesPositionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;