import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import 'normalize.css'
import 'styled-components'
import './index.css'
//Components
import Root from './routes/root'
import Projects from './routes/projects'
import About from './routes/about'
import ErrorPage from './error-page'

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<ErrorPage />}>
      <Route element={<Projects />} path='projects' />
      <Route element={<About />} path='about' />
    </Route>
  )
)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'projects',
//         element: <Projects />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
)
