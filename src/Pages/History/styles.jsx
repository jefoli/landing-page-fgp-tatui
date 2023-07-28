import styled, { css } from 'styled-components';

export const DefaultContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.whiteColor};
    background-color: #888888f6;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: ${theme.spacings.xxhuge} ${theme.spacings.small};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    align-items: center;

    .teste12 {
    padding:  ${theme.spacings.xsmall};
    border-radius: 100px;
    background: #f5cb11;
    color: ${theme.colors.whiteColor};
    font-size: ${theme.fonts.sizes.xhuge};
    position: relative;
    top: -50px;

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;
    }
  }

  @media ${theme.media.lteMedium} {
      min-width: 100%;
    }
  `}
`;

export const BoxContent = styled.div`
    ${({ theme }) => css`
      display: flex;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(minWidth, 1fr));
      width: 100%;
      gap:  ${theme.spacings.xlarge};
      text-align: center;
      padding:  ${theme.spacings.xxsmall};
      flex-direction: row;

      @media ${theme.media.lteMedium} {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        min-width: 100%;
        justify-items: center;
      }
  `}
`;

export const BoxStyle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-radius: 10px;
    background-color: #676464;
    padding: 20px;
    width: 400px;
    align-items: center;
    justify-content: center;
    min-height: 200px;

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      width: 100%;
      margin-top: 30px;
      justify-items: center;
    }
  `}
`;

export const MissionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
