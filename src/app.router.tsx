import { createBrowserRouter } from 'react-router';
import { MainLayout } from './pages/layouts/MainLayout';
import { HomePage } from './pages/home/HomePage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
