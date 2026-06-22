/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router';
import { MainLayout } from './pages/layouts/MainLayout';
import { HomePage } from './pages/home/HomePage';
import { lazy } from 'react';

const TechLogisticsPage = lazy(
  () => import('@/pages/projects/techlogistics/TechLogisticsPage')
);

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        children: [
          {
            path: 'techlogistics',
            element: <TechLogisticsPage />,
          },
        ],
      },
    ],
  },
]);
