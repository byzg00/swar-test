import React from 'react'
import { RouterProvider } from 'react-router'
import './global.css'

import ErrorBoundary from './components/ErrorBoundary'
import router from './router'

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}
App.displayName = 'App'
export default App
