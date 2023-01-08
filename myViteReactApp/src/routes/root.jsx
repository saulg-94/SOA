import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'

export default function Root() {
  return (
    <>
      <Wrapper>
        <nav>
          <h3>Shorn Ones Association</h3>
        </nav>
        <main className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Web Development with an <span>Attitude</span>
            </h1>
            <p>
              Solo entrepreneur on a quest to learn the secrets of what it takes
              to make a start-up successful. With an emphasis on local impact
              and community-driven interactiveness. Our products will focus on
              security around modern cutting-edge technologies, specifically on
              integrating micropayments through membership exclusive access
              content. Security, of course, is important in all stages of
              development.
            </p>
          </div>
        </main>
      </Wrapper>
      <Outlet />
    </>
  )
}
