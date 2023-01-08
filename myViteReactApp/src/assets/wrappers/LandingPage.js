import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    /* border: solid red 2px; */
    margin-bottom: 12px;
    background: black;
    border-radius: 10px;
    h3 {
      font-size: 1.35rem;
    }
  }
  .logo-container {
    display: block;
    background: var(--primary-10);
    width: 3rem;
    margin-bottom: auto;
    padding-right: 70px;
    min-height: 2rem;
    border: 1px solid black;
    border-radius: 0.5rem;
  }

  #logo {
    height: 3rem;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    background: var(--primary-50);
    /* border: solid green 2px; */
  }
  h2 {
    font-weight: 700;
  }
  .slide-in-element {
  }

  .main-img {
    display: none;
  }
  .demo-section {
    background: var(--primary-300);

    h1 {
      text-align: center;
      margin: auto;
    }
    .demo-container {
      display: block;
      height: 100vh;
      width: auto;
    }
  }

  /**************
  MIN-WIDTH 680px
  ****************/
  @media (min-width: 810px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      background: var(--primary-900);
      background: radial-gradient(var(--primary-900), var(--primary-50));
      width: 40vh;
      height: 40vh;
      border-radius: 1rem;
      border: 1px solid var(--primary-50);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      /* border: solid red 2px; */
      margin-bottom: 12px;
      background: black;
      h3 {
        font-size: 2rem;
      }
    }
    .logo-container {
      display: block;
      background: var(--primary-10);
      width: 2rem;
      min-height: 2rem;
      border: 1px solid black;
      border-radius: 0.5rem;
      /* animation: spin 4s linear infinite; */
    }
  }
  @media (min-width: 992px) {
    nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      /* border: solid red 2px; */
      margin-bottom: 12px;
      background: black;
      h3 {
        font-size: 2rem;
      }
    }
    .logo-container {
      display: block;
      background: var(--primary-10);
      width: 2rem;
      min-height: 2rem;
      border: 1px solid black;
      border-radius: 0.5rem;
      /* animation: spin 4s linear infinite; */
    }
  }
`
export default Wrapper
