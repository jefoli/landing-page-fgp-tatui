import styled, { css } from 'styled-components';

const menuVisible = () => css`
//menu-mobile:
${({ theme }) => css`
    display: block;
    visibility: visible;
    opacity: 1;
    background: ${theme.colors.backgroundMenuMobile};
  `}
`;

export const Default = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
    font-family: ${theme.fonts.family.primary};

    &.scroll {
      opacity: 0;
      visibility: hidden;
      box-shadow: 0;
    }

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.backgroundMenuDesktop};
    width: 100%;
    height: ${theme.fonts.sizes.huge};
    padding: 0 ${theme.fonts.sizes.xsmall};
    border-bottom: 1px solid #ffff0020;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
      font-size: ${theme.fonts.sizes.xsmall};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: center;
    background: ${theme.colors.white};


    @media ${theme.media.lteMedium} {
      min-height: 100vh;
      visibility: hidden;
      opacity: 1;

      ${visible && menuVisible(theme)}
      display: flex;
    }
  `}
`;
