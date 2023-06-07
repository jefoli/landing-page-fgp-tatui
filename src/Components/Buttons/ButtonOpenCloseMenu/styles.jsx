/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 9999;
    position: fixed;
    top:4px;
    right: 4px;
    width: 30px;
    height:30px;
    color: white;
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    align-items: center;
    border-radius: 4px;
    background: rgb(245, 203, 17);

    > svg {
      width:30px;
      height: 30px;
    }


  `}
`;
