import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
    background-color: ${(props) => props.color};
    color: ${theme.colors.blackColor};
    font-size:  ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.default};

    border-radius: ${theme.fonts.sizes.xsmall};
    border: none;
    cursor: pointer;
  `}
`;
