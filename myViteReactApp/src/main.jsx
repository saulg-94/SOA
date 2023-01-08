import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import Projects from './routes/projects'
import About from './routes/about'

const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        path: 'projects',
        element: <Projects />,
        loader: Projects,
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
