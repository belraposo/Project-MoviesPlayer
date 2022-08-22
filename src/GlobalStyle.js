import { createGlobalStyle } from 'styled-components' ;   
import background from './assets/wallpaper-retro.jpg';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Rokkitt', serif;
  }

  body {
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
  }
`;