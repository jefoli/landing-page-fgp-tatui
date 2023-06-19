import styled, { css } from 'styled-components';

export const DefaultContainer = styled.div`
  ${({ theme }) => css`
  color: ${theme.colors.whiteColor};
  background-color: #3f3f3ff6;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

.teste12 {
    padding: 10px;
    border-radius: 100px;
    background: #040404;
    color: #ffffff;
    font-size: 50px;
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
      grid-template-columns: repeat(auto-fit, minmax(minWidth, 1fr));
      width: 100%;
      gap: 10px;
      text-align: center;
      padding: 10px;
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
