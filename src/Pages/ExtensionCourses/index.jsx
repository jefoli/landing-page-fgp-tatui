import { Carousel } from '../../Components/Carousel';
import { SectionContainer } from '../../Components/SectionContainer';
import { ExtensionCardTitles } from './extensionTitles';
import * as Styled from './styles';

export const ExtensionCourses = () => {
  return (
    <SectionContainer color="#eeecec">
      <Styled.Default>
        <h1>CURSOS DE EXTENSÃO</h1>
        <div>
          <h3>Descubra nossos cursos de extensão</h3>
          <h3>
            criados para quem busca atualização profissional e enriquecimento
            pessoal. São diversas opções de temas, todos desenvolvidos com base
            nas últimas tendências do mercado
          </h3>
        </div>
      </Styled.Default>
      <Styled.Wrapper>
        <Carousel cardTitles={ExtensionCardTitles} />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
