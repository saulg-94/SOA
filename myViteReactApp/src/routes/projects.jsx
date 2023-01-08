import { RouterProvider, useLoaderData } from 'react-router-dom'

function loader() {
  return fetchProjects()
}

export default function Projects() {
  const projects = useLoaderData()
  return (
    <>
      <h1>Projects Page</h1>

      <div className='container'></div>
    </>
  )
}
