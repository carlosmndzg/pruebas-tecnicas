import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ItemsPage, { loader as itemsLoader } from './pages/ItemsPage'
import ItemPage, { loader as itemLoader } from './pages/ItemPage'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: '/items',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ItemsPage />,
        loader: itemsLoader,
        errorElement: <Error />,
      },
      {
        path: ':id',
        element: <ItemPage />,
        loader: itemLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
