import { Navigate, useRoutes } from 'react-router-dom';

import Login from 'pages/login/index';
import Layout from 'pages/layout/index';
import Dashboard from 'pages/dashboard/index';
import Table from 'pages/table/index';
import Chart from 'pages/chart/index';

const routeList = [
  {
    path: '/login',
    element: <Login />,
    exact: true,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'table',
        element: <Table />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/dashboard" />,
  },
];

const useRoute = () => {
  return useRoutes(routeList);
};

export default useRoute;
