import { Navigate, useRoutes } from 'react-router-dom';

import Login from '../views/login/index';
import Layout from '../views/layout/index';
import Dashboard from '../views/dashboard/index';
import Table from '../views/table/index';
import Chart from '../views/chart/index';

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
