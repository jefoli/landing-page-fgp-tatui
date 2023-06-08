/* eslint-disable no-unused-vars */
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    *{
      box-sizing: border-box;
      margin:0;
      padding: 0;
      outline:0;
    }

    body {
      line-height: 1.5;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
      background-color: #edece7;
    }

    html {
      scroll-behavior: smooth;
    }

    a {
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 2px;
      text-decoration: none;
    }

    h1, h2,  h3, h4, h5, h6 {
      font-family: 'Bebas Neue', cursive;
    }

    p {
      font-family: signika;
      font-size: 15px;
      font-family: 'Rubik', sans-serif;
    }
  `}
`;
