/* eslint-disable no-unused-vars */
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`

  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    outline:0;
    line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  }
  body {
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

a {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
}

body h1, body h2, body h3, h4, h5, h6 {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  text-align: center;
}

p {
  font-family: 'Roboto', sans-serif;
}


.wrapper1 {
  display: flex;
  width: 50%;
  justify-content: center;
}

.wrapper1 img{
  display: flex;
  max-width: 700px;
  justify-content: center;
  background-size: cover; /* redimensiona a imagem para preencher todo o corpo */
}


.centralize {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}


.social-icons {
  font-size: 30px;
  color: rgb(245, 203, 17);
  margin-top: 15px;
}

.section-container-gray{
  min-height: 100vh;
  background-color: rgb(247, 247, 247);
  
}

.section-container-yellow{
  min-height: 100vh;
  background-color: rgb(245, 203, 17);
}


.section-container-black{
  width: 100%;
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
  color: white;

}

.section-container-black-yellow{
width: 100%;
min-height: 100vh;
background-color: rgb(0, 0, 0);
color: rgb(2, 2, 2);
}

.section-container-black-yellow h1, .section-container-black-yellow h3 {
  color: rgb(255, 255, 255);
  padding: 30px;
}

.section-container-black-yellow .btn {
  color: #262626;
  background-color:rgb(245, 203, 17);
}
  

.section-container-image{
  width: 100%;
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
  color: white;
  background-image: url('../test.jpg');
  background-size: cover; /* redimensiona a imagem para preencher todo o corpo */
  background-repeat: no-repeat; /* impede a repetição da imagem */
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

.footer {
  background-color: black;
  text-align: center;
}

.footer p {
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 20px 0;
}


.navigation {
  height: 70px;
  background: #262626;
}

.card-content {
  padding: 20px;
  
} 


.card-title {
  font-family: 'Bebas Neue', cursive;
  font-size: 20px;
}

.card-content a{
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

nav {
  float: right;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  float: left;
  position: relative;
}
nav ul li a,
nav ul li a:visited {
  display: block;
  padding: 0 20px;
  line-height: 70px;
  background: #262626;
  color: #ffffff;
  text-decoration: none;
}
nav ul li a:hover,
nav ul li a:visited:hover {
  background: rgb(245, 203, 17);
  color: #ffffff;
}
nav ul li a:not(:only-child):after,
nav ul li a:visited:not(:only-child):after {
  padding-left: 4px;
  content: " ▾";
}
nav ul li ul li {
  min-width: 190px;
}
nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
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

@media only screen and (max-width: 798px) {
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
@media screen and (min-width: 799px) {
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

article {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}


.carousel .card {
  width: 300px;
  margin: 0 auto;
  height: 400px;
  text-align: center;
}

.carousel .card img {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.carousel .card-body {
  padding: 20px;
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

.map iframe{
  max-width: 100%;
}

  `}
`;
