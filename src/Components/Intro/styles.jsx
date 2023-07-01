import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.blackColor};

    & img {
      opacity: 0.9;
      min-width: 100%;
      min-height: 100%;
      position: relative;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      background-color: ${theme.colors.blackColor};

      & img {
        max-width: 100%;
        min-height:300px;
        opacity: 0.9;
        position: relative;
        object-fit: cover;
      }
    }
  `}
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
