import { Carousel } from '../../Components/Carousel';
import { SectionContainer } from '../../Components/SectionContainer';
import { ExtensionCardTitles } from './extensionTitles';
import * as Styled from './styles';

export const ExtensionCourses = () => {
  return (
    <SectionContainer color="#eeecec">
      <Styled.Default>
        <h1>CURSOS DE EXTENSÃO</h1>
        <p>
          Cursos desenvolvidos para educadores que buscam aprimorar suas
          habilidades de forma ágil, eficiente e com conclusão em tempo reduzido
        </p>
      </Styled.Default>
      <Styled.Wrapper>
        <Carousel cardTitles={ExtensionCardTitles} />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
