import { createGlobalStyle } from "styled-components";
import apple from './font/appleSDGothicNeoR.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
          font-family: 'apple';
          src: local('apple'), local('apple');
          font-style: normal;
          src: url(${apple}) format('truetype');
      }
      
  *, *::before, *::after {
    
  }

  body {
    font-family: apple;
    line-height: 1.3;
  }
`

export default GlobalStyle;