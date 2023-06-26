import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #414141;

    & img {
      min-width: 100%;
      min-height: 100%;
      opacity: 0.3;
      position: relative;
    }

    @media (max-width: 768px) {
      max-width: 100%;

      & img {
      max-width: 100%;
      min-height:300px;
      opacity: 0.3;
      position: relative;
    }
    }

  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #0c0c0c;
    justify-content: center;
    align-items: center;
    z-index: 4;
  `}
`;
