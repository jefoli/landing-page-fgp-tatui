import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import ImgFolder from '../../assets/images/folder.png';

export const Intro = () => {
  return (
    <SectionContainer>
      <Styled.Wrapper>
        <img
          src={ImgFolder}
          alt="image folder which contain the name Faculdade FGP Polo Tatuí in black color"
        />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
