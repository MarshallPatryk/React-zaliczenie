import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
    font-weight: ${({ theme }) => theme.colors.fontWeight};
    color: ${({ theme }) => theme.colors.fontColor};
  }
  html,button{
    font-size: ${(props) => `${props.fontSize}px`};
    overflow-x:hidden;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  body{
    margin:0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
  button,input{
    background-color:${({ theme }) => theme.colors.element};
  }
  a{
    text-decoration:none;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  button{
    font-family: 'Nunito Sans', sans-serif;
  }
 
`;
