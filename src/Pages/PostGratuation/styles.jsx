import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    justify-content: center;
  `}
`;

export const Default = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    max-width: 100%;
    text-align: center;
  `}
`;
