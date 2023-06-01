/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

const menuVisible = () => css`
${({ theme }) => css`
    display: block;
    visibility: visible;
    opacity: 1;
    background: red;
  `}
`;

export const Navigation = styled.section`
  height: 64px;
  background: #262626;
  display: flex;
  justify-content: space-around;
  align-items: first baseline;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
nav :hover,
nav :visited:hover {
  background: rgb(245, 203, 17);
  color: #ffffff;
}
`;

export const Wrapper = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: center;
    background: white ;
    box-shadow: 0px 1px gray;

    @media screen and (min-width: 810px) {
      min-height: 100vh;
      visibility: hidden;
      opacity: 1;

      ${visible && menuVisible(theme)}
      display: flex;
    }
  `}
`;
