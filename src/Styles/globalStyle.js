import { createGlobalStyle } from 'styled-components'
import {fontText, fontTitle} from "./globalVariables";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  html, 
  body, 
  #root {
    height: 100%;
  }
  
  #root {
    font-family: ${fontText};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontTitle};
  }
  
  `;

export default GlobalStyle;