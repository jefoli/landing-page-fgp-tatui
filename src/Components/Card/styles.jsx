/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-family: 'Bebas Neue', cursive;
    width: 100%;
    font-size: 18px;
    height: 320px;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    background-color:  #d2d2d2;
    margin-left: 10px;
    width: 350px;

    & :hover {
      transform: scale(1.1);
      transition: all 300ms ease-in-out;
    }
  `}
`;

export const TextContent = styled.div`
${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    & a {
      color: #747171;
      font-family: 'Rubik', sans-serif;
      cursor: pointer;
    }
  `}
`;
