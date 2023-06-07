/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Folder = styled.div`
${({ theme }) => css`  
  z-index: 100;
  background-color: #00000032;
  bottom: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  text-align: right;
  min-height: 100%;
  
  & img {
    max-width: 400px;
    border-radius: 20px;
  }

  & svg {
  font-size: 20px;
  color: ${theme.colors.primaryColor};
  }

  `}
`;
