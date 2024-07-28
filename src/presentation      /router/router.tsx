import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../enums/router';
import { Layout, PrivateRoute } from '../shared';
import { AddEmployeePage, HomePage, InDev, Login, Register } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: Routes.Home,
        element: (
          <PrivateRoute>
            <HomePage />,
          </PrivateRoute>
        ),
      },
      {
        path: Routes.AddEmployee,
        element: (
          <PrivateRoute>
            <AddEmployeePage />
          </PrivateRoute>
        ),
      },
      {
        path: Routes.InDev,
        element: <InDev />,
      },
      {
        path: Routes.Register,
        element: <Register />,
      },
      {
        path: Routes.Login,
        element: <Login />,
      },
    ],
  },
]);
