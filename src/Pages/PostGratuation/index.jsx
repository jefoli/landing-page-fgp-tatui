import { SectionContainer } from '../../Components/SectionContainer';
import { SectionSubscribe } from '../../Components/SectionSubscribe';
import { Carousel } from '../../Components/Carousel';
import * as Styled from './styles';
import { postGradutationTitles } from './courses-postgradutation';

export const PostGraduation = () => {
  return (
    <SectionContainer color="#f5cb11">
      <SectionSubscribe />
      <Styled.Default>
        <h1>CURSOS DE PÓS-GRADUAÇÃO</h1>
        <h2>
          Cursos criados para quem busca atualização profissional e
          enriquecimento pessoal. São diversas opções de temas, todos
          desenvolvidos com base nas últimas tendências do mercado e ministrados
          por profissionais renomados em suas áreas de atuação.
        </h2>

        <Styled.Wrapper>
          <Carousel cardTitles={postGradutationTitles} />
        </Styled.Wrapper>
      </Styled.Default>
    </SectionContainer>
  );
};
