import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Employees } from "../../data";

export const getEmployees = createAsyncThunk<Employees[], void>(
  "employees/getEmployees",
  async () => {
    console.log('Environment Variable:', process.env.REACT_APP_MAIN_URL);
    const response = await axios.get(`http://localhost:8080/employees`);
    return response.data;
  }
)

export const createEmployee = createAsyncThunk<Employees, Employees, { rejectValue: string }>(
  "employee/createEmployee",
  async (employee) => {
    const response = await axios.post(`http://localhost:8080/employees`, employee);
    return response.data;
  }
);

// toast.success("вы добавили к корзину")