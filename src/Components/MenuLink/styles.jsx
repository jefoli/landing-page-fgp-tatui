import styled, { css } from 'styled-components';

export const WrapperMenu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: ${theme.fonts.family.primary};

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      padding: ${theme.spacings.large} 0rem;
    }
  `};
`;
