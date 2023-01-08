import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: calc(var(--nav-height) - 40px);
    display: flex;
    justify-items: center;
    align-items: center;
    margin-bottom: 55px;
    background: var(--primary-700);
    border-radius: 10px;
    h3 {
      font-size: 1.35rem;
      color: var(--primary-100);
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
    border-radius: 1rem;
    /* border: solid green 2px; */
  }
  h2 {
    font-weight: 700;
  }

  .main-img {
    display: none;
  }
  .demo-section {
    background: var(--primary-200);
    width: 90%;
    margin: auto;
    margin-top: 10px;
    border-radius: 1rem;

    h1 {
      text-align: center;
      margin: auto;
    }
    .demo-container {
      display: grid;
      grid-template-columns: 1fr;
      height: auto;
      background: var(--primary-300);
      align-content: center;
      padding: 10px;
    }
    /********
    Project Cards
      *******/
    .project-card {
      display: grid;
      grid-template-columns: 1fr;
      border: solid 2px black;
      max-width: 370px;
      margin: auto;
      margin-bottom: 30px;
      border-radius: 1rem;
      border: 1px solid var(--primary-500);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      background: var(--primary-100);

      h4 {
        /* border: solid 2px yellow; */
        text-align: center;
        width: fit-content;
        justify-self: center;
      }

      img {
        width: 35vh;
        height: 300px;
        justify-self: center;
        border-radius: 1rem;
        /* border: 1px solid var(--primary-500); */
        /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); */
      }
      p {
        /* border: solid 2px purple; */
        text-align: center;
      }
    }
  }

  /**************
  MIN-WIDTH 810px
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
      background: var(--primary-700);
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
    .demo-section {
      display: flex;
      flex-direction: column;
      background: var(--primary-200);
      /* width: 90%; */
      margin: auto;
      margin-top: 10px;
      border-radius: 1rem;
      max-width: 1480;

      h1 {
        text-align: center;
        margin: auto;
      }

      .demo-container {
        justify-self: center;
        display: grid;
        grid-template-columns: 1fr;
        background: var(--primary-300);
        /********
    Project Cards
      *******/
        .project-card {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 370px;
          height: auto;
          border: solid 2px black;
          margin: auto;
          margin-bottom: 30px;
          border-radius: 1rem;
          border: 1px solid var(--primary-500);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          background: var(--primary-100);

          h4 {
            /* border: solid 2px yellow; */
            text-align: center;
            width: fit-content;
            justify-self: center;
          }

          img {
            width: 35vh;
            height: 200px;
            border-radius: 1rem;
            /* border: 1px solid var(--primary-500); */
            /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); */
          }
          p {
            /* border: solid 2px purple; */
            text-align: center;
          }
        }
      }
    }
  }

  @media (min-width: 1480px) {
    nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;

      margin-bottom: 12px;
      background: var(--primary-700);
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
    }
    .demo-section {
      display: flex;
      flex-direction: column;
      background: var(--primary-200);
      /* width: 90%; */
      margin: auto;
      margin-top: 10px;
      border-radius: 1rem;
      max-width: 1480;

      h1 {
        text-align: center;
        margin: auto;
      }

      .demo-container {
        justify-self: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background: var(--primary-300);
      }
    }
  }
`
export default Wrapper
