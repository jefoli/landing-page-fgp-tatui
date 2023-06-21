import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.blackColor};
    text-align: center;
    width: 100%;

    > p {
      color: ${theme.colors.grayColor};
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.medium} 0;
    }

    & svg {
      font-size: ${theme.fonts.sizes.xlarge};
      color: ${theme.colors.yellowColor};
    }
  `}
`;

export const Contact = styled.div`
    ${({ theme }) => css`
      color: ${theme.colors.whiteColor};
      display: flex;
      flex-direction: column;
    padding: ${theme.spacings.small};
      align-items: center;
      justify-content: center;

      @media ${theme.media.lteMedium} {
        width: 100%;
        min-height: 100%;
        justify-content: space-around;
      }
    `}
`;

export const ContactBox = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: row;

      > p {
        padding: ${theme.spacings.medium};
      }

      @media ${theme.media.lteMedium} {
        max-width: 100%;
        justify-content: space-around;
        flex-direction: column;
      }
  `}
`;

export const SocialMediaIconsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      justify-content: space-around;
    }
  `}
`;
