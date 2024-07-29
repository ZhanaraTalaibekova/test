import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employees, Users } from '../../data';
import { toast } from 'react-toastify';
import i18n from 'i18next';

export const getEmployees = createAsyncThunk<Employees[], void>('employees/getEmployees', async () => {
  const response = await axios.get(`${process.env.REACT_APP_MAIN_URL}/employees`);
  return response.data;
});

export const createEmployee = createAsyncThunk<Employees, Employees, { rejectValue: string }>(
  'employee/createEmployee',
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_MAIN_URL}/employees`, employee);
      toast.success(i18n.t('employee.createdSuccess'));
      return response.data;
    } catch (error) {
      let errorMessage = i18n.t('employee.createError');
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteEmployee = createAsyncThunk<void, number, { rejectValue: string }>(
  'employee/deleteEmployee',
  async (employeeId, { rejectWithValue }) => {
    try {
      await axios.delete(`${process.env.REACT_APP_MAIN_URL}/employees/${employeeId}`);
      toast.success(i18n.t('employee.deletedSuccess'));
    } catch (error) {
      let errorMessage = i18n.t('employee.deleteError');
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const registerUser = createAsyncThunk('registerUser', async (newUser: Users) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/register`, newUser);
    localStorage.setItem('token', data.accessToken);
    toast.success(i18n.t('auth.registerSuccess'));
    return data.user;
  } catch (error: any) {
    toast.error(i18n.t('auth.registerError'));
  }
});

export const loginUser = createAsyncThunk('loginUser', async (newUser: Users) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/login`, newUser);
    localStorage.setItem('token', data.accessToken);
    toast.success(i18n.t('auth.loginSuccess'));
    return data.user;
  } catch (error: any) {
    toast.error(i18n.t('auth.loginError'));
  }
});
