import { Outlet } from 'react-router-dom'

import Wrapper from '../assets/wrappers/LandingPage'
import logo from '../assets/Logo.svg'
import Main from '../assets/images/pair_programming.svg'

function logWindowSize() {
  console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`)
}

window.addEventListener('resize', logWindowSize)

export default function Root() {
  return (
    <>
      <Wrapper>
        <nav>
          <div className='logo-container'>
            <img src={logo} alt='logo' id='logo' />
          </div>
          <h3>Shorn Ones Association</h3>
        </nav>
        <main className='container page'>
          {/* info */}
          <div className='info'>
            <h2>
              Web Development with an{' '}
              <div className='slide-in-element'>Attitude</div>
            </h2>

            <p>
              Solo entrepreneur on a quest to learn the secrets of what it takes
              to make a start-up successful. With an emphasis on local impact
              and community-driven interactiveness. Our products will focus on
              security around modern cutting-edge technologies, specifically on
              integrating micropayments through membership exclusive access
              content. Security, of course, is important in all stages of
              development.
            </p>
            <button className='btn btn-hero'>Access Exclusive Content</button>
          </div>

          <img src={Main} alt='landing page image' className='main-img' />
        </main>

        <section className='demo-section'>
          <h1>demo section</h1>
          <div className='demo-container'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur nobis porro accusantium facere perferendis eum
              asperiores placeat culpa nesciunt illum?
            </p>
          </div>
        </section>
      </Wrapper>
      <Outlet />
    </>
  )
}
