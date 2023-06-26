import styled, { css } from 'styled-components';

export const WrapperMenu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 2px;
    font-family: ${theme.fonts.family.primary};

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `};
`;
