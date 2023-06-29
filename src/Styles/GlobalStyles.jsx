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
      font-weight: 400;
      background-color: #edece7;
    }

    html {
      scroll-behavior: smooth;
      font-size: 62.5%;
    }

    a {
      text-decoration: none;
    }

    h1, h2,  h3, h4, h5, h6 {
      font-family: 'Bebas Neue', cursive;
    }

    h1 {
      font-size: ${theme.fonts.sizes.huge};
    }

    h2 {
      font-size: ${theme.fonts.sizes.xlarge};
    }

    h3 {
      font-size: ${theme.fonts.sizes.medium};
    }

    p {
      font-size: calc(${theme.fonts.sizes.medium} - 0.3rem);
      font-family: 'Rubik', sans-serif;
    }
  `}
`;
