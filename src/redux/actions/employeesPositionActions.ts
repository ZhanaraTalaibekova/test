import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EmployeesPositions } from "../../data";

export const getEmployeesPositions = createAsyncThunk<EmployeesPositions[], void>(
  "employeesPositions/getEmployeesPositions",
  async () => {
    const response = await axios.get(`http://localhost:8080/employeesPositions`);
    return response.data;
  }
);

export const addEmployeePosition = createAsyncThunk<any, any, { rejectValue: string }>(
  "employeePositions/addEmployeePosition",
  async (employee, { rejectWithValue }) => {
    try {
      const updates: Record<string, any[]> = {};

      for (const [position, isAssigned] of Object.entries(employee.positions)) {
        if (isAssigned) {
          const category = position + "s";
          if (!updates[category]) {
            updates[category] = [];
          }
          updates[category].push({
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            phoneNumber: employee.phoneNumber,
            positions: employee.positions,
            team: employee.team,
            userImage: employee.userImage,
          });
        }
      }

      const updateResponse = await axios.patch("http://localhost:8080/employeesPositions", updates);
      return updateResponse.data;
    } catch (error) {
      console.error("Ошибка при добавлении позиции сотрудника:", error);
      return rejectWithValue("Ошибка при добавлении позиции сотрудника");
    }
  }
);