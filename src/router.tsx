import React from 'react';
import { createBrowserRouter } from 'react-router';

import Index from './pages/Index';
import Notfound from './pages/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Index />
    ),
  },
  {
    path: '*',
    element: (
      <Notfound />
    ),
  },
]);

export default router;
