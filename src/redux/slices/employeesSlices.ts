<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addEmployeePosition, createEmployee, getEmployees } from "../actions";
import { Employees, Status } from "../../data";
=======
import { createSlice } from '@reduxjs/toolkit';
import { createEmployee, getEmployees, loginUser, registerUser } from '../actions';
import { Employees, Status } from '../../data';
>>>>>>> f391fb6e7fe367d8676a16b3ea7672dc6682f8cd

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
<<<<<<< HEAD
    name: 'employeesPositions',
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
    },
=======
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
>>>>>>> f391fb6e7fe367d8676a16b3ea7672dc6682f8cd
});
