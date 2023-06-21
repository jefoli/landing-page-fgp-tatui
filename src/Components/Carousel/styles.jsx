import styled, { css } from 'styled-components';

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: flex;
    align-items: center;
    max-height:100%;
  }

`;

export const ButtonMenu = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    top: auto;
    center: 0;
    transform: translate(-50%, 50%);
  }
`;

export const Button = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.yellowColor};
    border-radius: 100%;
    cursor: pointer;
    font-size: ${theme.fonts.sizes.large};
    padding: 0 ${theme.fonts.sizes.xlarge};

  `}
`;

export const Slide = styled.div`
  flex: 0 0 33.33%;
  transition: transform 0.3s ease-in-out;
  scroll-snap-type: x mandatory;
`;
