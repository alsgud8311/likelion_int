import { createGlobalStyle } from "styled-components";
import lineseed from './font/LINESeedKR-Rg.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
          font-family: 'lineseed';
          src: local('lineseed'), local('lineseed');
          font-style: normal;
          src: url(${lineseed}) format('truetype');
      }
      
  *, *::before, *::after {
    
  }

  body {
    font-family: lineseed;
    line-height: 1.3;
  }
`

export default GlobalStyle;