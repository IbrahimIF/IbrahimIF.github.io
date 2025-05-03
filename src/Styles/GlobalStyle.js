import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
:root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
  
  html, body {
    height: 100%;
    width: 100%;
  }
  
  
  body {
    margin: 0;
    display: flex;
    place-items: center;
  }
  
  
  
  
  /* Font size for mobile devices */
  @media (max-width: 840px) {
    .box {
      width: 106%;
      transition: 1s;
    }
  }
  
  /* Media queries for smaller screens */
  @media only screen and (max-width: 768px) {
    .firstText {
      font-size: 24px;
      transition: 1s;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .firstText {
      font-size: 20px;
      transition: 1s;
    }
  
  }
  
  
  .section {
    height: 100vh; 
    width: 100%;   
    position: relative; 
    overflow: auto; 
    
    padding: 20px;
    box-sizing: border-box; 
    
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .section-content {
  
    max-width: 800px;
    width: 100%;
  
    max-height: 90vh;
    overflow-y: auto;
    
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 10px;
  }
`;





