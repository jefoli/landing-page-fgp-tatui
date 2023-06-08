import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.blackColor};
    text-align: center;
    width: 100%;
    > p {
      color: ${theme.colors.grayColor};
      font-size: 15px;
      padding: 20px 0;
    }

    & svg {
      font-size: 30px;
      color: ${theme.colors.grayColor};

    }
  `}
`;

export const Contact = styled.div`
    ${({ theme }) => css`
      color: ${theme.colors.whiteColor};
      display: flex;
      flex-direction: column;
      padding: 20px;
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
        padding: 20px;
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
