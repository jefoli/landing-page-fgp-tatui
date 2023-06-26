import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    gap: ${theme.spacings.xlarge};
    margin-bottom: 30px;
    justify-content: center;

    @media (max-width: 768px) {
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.small};
    }


    @media (max-width: 480px) {
      gap:  ${theme.spacings.small};
      padding:  ${theme.spacings.small};
    }
  `}
`;

export const Default = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
    padding: ${theme.spacings.small};
    text-align: center;

    @media (max-width: 768px) {
      padding: ${theme.spacings.small};
    }

    @media (max-width: 480px) {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
