import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employees, Users } from '../../data';

export const getEmployees = createAsyncThunk<Employees[], void>('employees/getEmployees', async () => {
  console.log('Environment Variable:', process.env.REACT_APP_MAIN_URL);
  const response = await axios.get(`http://localhost:8080/employees`);
  return response.data;
});

export const createEmployee = createAsyncThunk<Employees, Employees, { rejectValue: string }>(
  'employee/createEmployee',
  async (employee) => {
    const response = await axios.post(`http://localhost:8080/employees`, employee);
    return response.data;
  },
);

export const registerUser = createAsyncThunk('registerUser', async (newUser: Users) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/register`, newUser);
    localStorage.setItem('token', data.accessToken);
    //потом можно поменять на всплывашку
    console.log('Вы успешно зарегистрировались!');
    return data.user;
  } catch (error: any) {
    //если что смотри консоль есссли token не сохранился скорее всего такой чел уже есть
    console.log(error.response.data);
  }
});

export const loginUser = createAsyncThunk('loginUser', async (newUser: Users) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/login`, newUser);
    localStorage.setItem('token', data.accessToken);
    console.log('Вы успешно авторизовались');
    return data.user;
  } catch (error: any) {
    console.log(error.response.data);
  }
});

// toast.success("вы добавили к корзину")
