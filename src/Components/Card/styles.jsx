import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
    height: 350px;
    text-align: center;
    background-color: ${theme.colors.whiteColor};
    border-radius: ${theme.fonts.sizes.medium};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    background-color:  ${theme.colors.mediumGrayColor};
    margin-left: ${theme.fonts.sizes.xxsmall};
    width: 350px;
    padding: 30px 20px;
  `}
`;

export const TextContent = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.huge};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    & :hover {
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
    }
  `}
`;

export const showMoreBtn = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary};
    cursor: pointer;
  `}
`;
