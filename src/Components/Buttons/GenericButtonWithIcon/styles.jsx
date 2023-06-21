import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
`}

`;
