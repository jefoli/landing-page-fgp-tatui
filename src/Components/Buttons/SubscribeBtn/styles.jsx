/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
  color: #262626;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  padding: 8px;
  border: none;
  `}
`;
