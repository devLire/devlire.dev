import './App.css';
import { RouterProvider } from 'react-router/dom';
import { appRouter } from './app.router';

export const DevLireApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
