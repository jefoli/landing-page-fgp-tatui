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
      max-width: 500px;
      border-radius: ${theme.fonts.sizes.medium};
    }

    & svg {
      font-size: ${theme.fonts.sizes.medium};
      color: ${theme.colors.yellowColor};
    }

    @media ${theme.media.lteMedium} {
      justify-content: center;
      display: flex;

      img {
        max-width: 300px;
      }

    }
  `}
`;
