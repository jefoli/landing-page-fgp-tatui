import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    justify-content: center;
  `}
`;

export const Default = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxhuge} 0;
    max-width: 100%;
    text-align: center;
    height: 100%;
  `}
`;
