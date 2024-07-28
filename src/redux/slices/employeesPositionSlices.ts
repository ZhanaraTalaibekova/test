import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addEmployeePosition, createEmployee, getEmployees, getEmployeesPositions } from "../actions";
import { Employees, EmployeesPositions, Status } from "../../data";

interface EmployeeState {
  data: EmployeesPositions[];
  status: Status;
  error: string | null;
}

const initialState: EmployeeState = {
  data: [],
  status: Status.LOADING,
  error: null,
}

export const employeesPositionSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesPositions.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getEmployeesPositions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = Status.SUCCEEDED;
      })
      .addCase(getEmployeesPositions.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message || "Failed to load employees";
      })
      .addCase(addEmployeePosition.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(addEmployeePosition.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
      })
      .addCase(addEmployeePosition.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload as string;
      });
  },
})
