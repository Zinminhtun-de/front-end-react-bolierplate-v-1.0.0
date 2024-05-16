import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '@/pages/HomePage';

function Routes() {
  const router = createBrowserRouter([
    {
      element: <MasterLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
