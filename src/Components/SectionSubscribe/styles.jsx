import styled, { css } from 'styled-components';

export const Default = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.whiteColor};
    background-color: ${theme.colors.lowGrayColor};
    text-align: center;
    padding: 20px;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundEffectBlur};
    display: flex;
    flex-direction:column;
    justify-content:center;
  `}
`;
