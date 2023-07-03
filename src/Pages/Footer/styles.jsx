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

export const contactContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small};

    > p {
      padding: ${theme.spacings.xxsmall};
    }
  `}
`;

export const ContactBox = styled.div`
  ${({ theme }) => css`
    display: flex;

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
    text-align: center;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      justify-content: space-around;
    }
  `}
`;

export const Creator = styled.h6`
  ${({ theme }) => css`
    padding:${theme.spacings.small} ${theme.spacings.medium};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.whiteColor};
  `}
`;
