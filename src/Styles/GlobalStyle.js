import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --section-padding: 4rem;
    --section-gap: 2rem;
    --border-color: rgb(0, 0, 0);
  }

  html {
  scroll-behavior: smooth;
}
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #000;
    color: #fff;
    font-family: Arial, sans-serif;
  }

  section {
    padding: var(--section-padding);
    margin-bottom: var(--section-gap);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: rgb(255, 255, 255);
    }
  }
`;





