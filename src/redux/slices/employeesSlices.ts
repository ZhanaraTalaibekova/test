import { createSlice } from '@reduxjs/toolkit';
import { createEmployee, getEmployees, loginUser, registerUser } from '../actions';
import { Employees, Status } from '../../data';

interface EmployeeState {
  data: Employees[];
  status: Status;
  error: string | null;
  userInfo: any;
}

const initialState: EmployeeState = {
  data: [],
  status: Status.LOADING,
  error: null,
  userInfo: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(createEmployee.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.data.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload || 'Unknown error';
      })
      .addCase(registerUser.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message || 'Unknown error';
      });
  },
});
