/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

const menuVisible = () => css`
${({ theme }) => css`
    visibility: visible;
    opacity: 1;
    display: block;
  `}
`;

export const Default = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;

  &.scroll {
    opacity: 0;
    visibility: visible;
    box-shadow: 0;
    scroll-behavior: smooth;
  }
`}
`;
export const Container = styled.div`
  display: flex;
  background: black;
  width: 100%;
  justify-content: center;

`;

export const Wrapper = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0px 1px gray;

    @media (min-width: 810px) {
      visibility: hidden;
      opacity: 1;
      ${visible && menuVisible(theme)}
      display: flex;
      
    }
  `}
`;
