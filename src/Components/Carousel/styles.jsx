import styled, { css } from 'styled-components';

export const CarouselWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    overflow: hidden;
    height: 100%;
    position: relative;

    & p {
      font-size: calc(${theme.fonts.sizes.small} + 0.2rem );
      font-weight: 300;
    }
    @media (max-width: 768px) {
      flex-direction: flex;
      align-items: center;
      min-height: 100%;
    }
  `}
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
    font-size: ${theme.fonts.sizes.xlarge};
    padding: ${theme.fonts.sizes.xxhuge} ${theme.fonts.sizes.large};
  `}
`;

export const Slide = styled.div`
  flex: 0 0 25%;
  transition: transform 0.3s ease-in-out;
  scroll-snap-type: x mandatory;
  scroll-snap-type: y proximity;
  scroll-snap-type: both mandatory;
`;
