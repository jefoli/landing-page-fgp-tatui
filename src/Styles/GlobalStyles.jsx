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
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  html {
    scroll-behavior: smooth;
  }
}

a {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
}

h1, h2,  h3, h4, h5, h6 {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0.5px;
  text-align: center;
}

p {
  font-family: 'Roboto', sans-serif;
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


/* Mobile navigation */
.nav-mobile {
  display: none;
  top: 0;
  right: 0;
  background: #262626;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 810px) {
  .nav-mobile {
    display: block;
  }

  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav ul {
    display: none;
  }
  nav ul li {
    float: none;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }

  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: 810px) {
  .nav-list {
    display: block !important;
  }
}

.icon-controls {
  text-align: center;
  margin-top: 10px;
}

.icon-controls a {
  margin: 0 5px;
}

  `}
`;
