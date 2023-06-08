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

  html {
    scroll-behavior: smooth;
  }
}

a {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  color: white;
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

.section-container-image{
  background-image: url('../src/assets/folder.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
}

.brand {
  display: flex;
  position: absolute;
  padding-left: 90px;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
  justify-content: center;
  padding-right: 30px;
}
  `}
`;
