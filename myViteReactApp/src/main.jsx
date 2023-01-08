import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from 'react-router-dom'
import './index.css'
import Projects, { loader as projectLoader } from './routes/projects'
import About from './routes/about'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
        loader: projectLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
