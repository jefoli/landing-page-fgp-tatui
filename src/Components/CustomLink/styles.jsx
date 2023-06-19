import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  color: ${theme.colors.whiteColor};
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  text-align: center;

  &:hover, &:visited:hover {
    background: {theme: .colors.yellowColor};
    color: ${theme.colors.whiteColor};
    }

  > a {
    text-decoration: none;
    color:${theme.colors.whiteColor};
    }

  `}

`;
