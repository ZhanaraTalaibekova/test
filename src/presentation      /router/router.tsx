import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../enums/router';
import { Layout } from '../shared';
import { AddEmployeePage, HomePage, InDev } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: Routes.Home,
        element: <HomePage />
      },
      {
        path: Routes.AddEmployee,
        element: <AddEmployeePage />
      },
      {
        path: Routes.InDev,
        element: <InDev />
      }
    ]
  }
])

