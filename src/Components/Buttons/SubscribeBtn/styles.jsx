import styled, { css } from 'styled-components';

export const Button = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
    background-color: ${theme.colors.yellowColor};
    color: ${theme.colors.blackColor};
    font-size:  ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.default};
    border-radius: ${theme.fonts.sizes.xsmall};
    border: none;
    cursor: pointer;
    text-decoration: none;

    & :hover {
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
    }
  `}
`;
