import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.default};
    border-right: 1px solid ${theme.colors.GrayMetalicColor};

    &:hover, &:visited:hover {
      background: ${theme.colors.yellowColor};
      color: ${theme.colors.whiteColor};
    }

    > a {
      text-decoration: none;
      color:${theme.colors.whiteColor};
    }
  `}
`;
