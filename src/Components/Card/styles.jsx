import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
    min-height: 610px;
    text-align: center;
    background-color: ${theme.colors.whiteColor};
    border-radius: ${theme.fonts.sizes.medium};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    background-color:  ${theme.colors.mediumGrayColor};
    margin-left: ${theme.fonts.sizes.xxsmall};
    width: 340px;
    margin: 0 5px;
    border: 1px solid  rgba(78, 75, 75, 0.4);

    & img {
      object-fit: cover;
      height:300px;
      margin-bottom: ${theme.spacings.medium};
      border-radius: ${theme.fonts.sizes.medium} ${theme.fonts.sizes.medium} 0 0 ;
      width: 100%;
    }

    @media (max-width: 768px) {
      min-height: 620px;
      max-width: 100%;
    }
  `}
`;

export const TextContent = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items:center;

    & :hover {
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
      text-decoration: none;
      color: ${theme.colors.yellowColor};
      background-color: ${theme.colors.blackColor}
    }
  `}
`;

export const showMoreBtn = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};

    &:hover {
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
      text-decoration: none;
      color: ${theme.colors.yellowColor};
    }
  `}
`;

export const InformationContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    height: 180px;
  `}
`;
