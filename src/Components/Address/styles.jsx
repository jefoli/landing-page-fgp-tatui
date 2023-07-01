import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.fonts.sizes.medium};
    flex-direction: column;
    text-align: center;
    align-items: center;

  > iframe{
    max-width: 100%;
  }
  `}
`;

export const TextContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.fonts.sizes.medium} ${theme.fonts.sizes.xsmall};
    text-align: center;
  `}
`;
