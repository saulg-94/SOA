import { useLoaderData } from 'react-router-dom'

export default function Projects() {
  const projects = useLoaderData()
  return (
    <>
      <h1>Projects Page</h1>

      <div className='container'></div>
    </>
  )
}
