import React from 'react'
import { createBrowserRouter } from 'react-router'

import { Articles } from '@/pages/Articles'

import Index from './pages/Index'
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/articles/:categoryId/:lang',
    element: <Articles />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
])

export default router
