import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    height: 100vh;
    margin: 0;
    font-family: "Roboto", sans-serif;
    scrollbar-width: none;
    scroll-behavior: smooth;
    
    button {
      cursor: pointer;
    }
    
  }  
`;