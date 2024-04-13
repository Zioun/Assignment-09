import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Components/Routes/Router'
import AuthProvider from './Components/Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
