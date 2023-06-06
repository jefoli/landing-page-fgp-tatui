/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const WrapperMenu = styled.ul`
 ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-align: center;

    @media (min-width: 810) {
      flex-flow: column wrap;
      align-content: center;
      padding: 60px 0rem;
    }
  
  `};
`;
