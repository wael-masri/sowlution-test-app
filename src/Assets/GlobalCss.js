import styled, { createGlobalStyle } from "styled-components";


//GLOBAL STYLE
export const GlobaleStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    
  }

`;