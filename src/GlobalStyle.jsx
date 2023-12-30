import { createGlobalStyle } from "styled-components";
import apple from './font/appleSDGothicNeoR.ttf';
import appleBold from './font/appleSDGothicNeoB.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
          font-family: 'apple';
          src: local('apple'), local('apple');
          font-weight: normal;
          font-style: normal;
          src: url(${apple}) format('truetype');
      }

    @font-face {
        font-family: 'apple';
        src: url(${appleBold}) format('truetype');
        font-weight: bold; // 굵은 굵기
        font-style: normal;
      }
      
  *, *::before, *::after {
    
  }

  body {
    font-family: apple;
    line-height: 1.3;
  }
`

export default GlobalStyle;