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
    padding: ${theme.fonts.sizes.medium};
    max-width: 100%;
  }
  `}
`;

export const TextContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top:  ${theme.fonts.sizes.medium};
    text-align: center;
  `}
`;
