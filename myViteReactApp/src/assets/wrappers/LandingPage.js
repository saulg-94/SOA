import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    border: solid red 2px;
    img {
      display: inline-block;
      width: 10%;
      height: 75%;
      background: var(--primary-10);
    }
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    background: var(--primary-50);
    border: solid green 2px;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-600);
    }
  }
  p {
    color: var(--grey-700);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      background: var(--primary-900);
      width: 40vh;
      height: 40vh;
    }
  }
`
export default Wrapper
