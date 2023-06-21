import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 999;
    position: fixed;
    top: ${theme.spacings.small};
    right: ${theme.spacings.small};
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};

    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    align-items: center;
    border-radius: ${theme.spacings.xxsmall};
    background: ${theme.colors.mediumGrayColor};

    & svg {
      width:${theme.fonts.sizes.medium};
      height: ${theme.fonts.sizes.medium};
      color: ${theme.colors.white};
    }

    @media ${theme.media.lteMedium} {
      justify-content: center;
      display: flex;
    }
  `}
`;
