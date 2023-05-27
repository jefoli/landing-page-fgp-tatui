import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
  color: #262626;
  background-color: ${theme.colors.primaryColor};
  border-radius: 10px;
  padding: 8px;
  border: none;
  `}
`;
