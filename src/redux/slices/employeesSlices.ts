import { createSlice } from "@reduxjs/toolkit";
import { createEmployee, getEmployees } from "../actions";
import { Employees, Status } from "../../data";

interface EmployeeState {
    data: Employees[];
    status: Status;
    error: string | null;
}

const initialState: EmployeeState = {
    data: [],
    status: Status.LOADING,
    error: null,
}

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
            });
    },
});

