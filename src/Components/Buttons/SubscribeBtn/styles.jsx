import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
  color: ${theme.colors.blackColor};
  background-color: ${(props) => props.color};
  border-radius: 10px;
  padding: 8px;
  border: none;
  cursor: pointer;
  `}
`;
