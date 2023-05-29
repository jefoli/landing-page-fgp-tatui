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

.centralize {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}


.section-container-image{
  width: 100%;
  background-image: url('../src/assets/folder.jpg');
  background-size: cover; /* redimensiona a imagem para preencher todo o corpo */
  background-repeat: no-repeat; /* impede a repetição da imagem */
  height: auto;
}

.test12{
  color: #ffffff;
  background-color: #3f3f3ff6;
  font-family: 'Roboto', sans-serif;
  width: 100%;
}

.divflex{
  display: flex;
  padding: 20px;
  
  flex-direction: column;
}

.grid1{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  text-align: center;
  border-radius: 10px;
}

.image-content {
  width: 100%;
  height: 100%;
}

.image-content img{
  max-width: 1400px;
  height: 400px;
  overflow: hidden;
}

.carousel-set {
  height: 467px;
  width: 1600px;
}



.card-content a {
  background-color: rgb(0, 0, 0);
  border: none;
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


.brand a,
.brand a:visited {
  color: #e6dfdf;
  text-decoration: none;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
}


.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */
.nav-mobile {
  display: none;
  position: absolute;
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
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
}
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: #ffffff;
  position: absolute;
  display: block;
  content: "";
  transition: all 300ms ease-in-out;
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}
#nav-toggle.active span {
  background-color: transparent;
}
#nav-toggle.active span:before, #nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}

.icon-controls {
  text-align: center;
  margin-top: 10px;
}

.icon-controls a {
  margin: 0 5px;
}

.icon-controls i {
  color: gray;
  font-size: 30px
}

  `}
`;
