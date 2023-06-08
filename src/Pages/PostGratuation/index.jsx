import { SectionContainer } from '../../Components/SectionContainer';
import { SectionSubscribe } from '../../Components/SectionSubscribe';
import { Carousel } from '../../Components/Carousel';
import * as Styled from './styles';
import { postGradutationTitles } from './courses-postgradutation';

export const PostGraduation = () => {
  return (
    <SectionContainer color="#edece7">
      <Styled.Default>
        <SectionSubscribe />
        <h1>CURSOS DE PÓS-GRADUAÇÃO</h1>
        <p>
          Cursos desenvolvidos no formato online para flexibilizar sua
          capacitação, através de uma plataforma intuitiva, interativa e
          personalizada, a qual permite que o estudante adaptar-se o conteúdo
          programado às suas necessidades específicas
        </p>
        <Styled.Wrapper>
          <Carousel cardTitles={postGradutationTitles} />
        </Styled.Wrapper>
      </Styled.Default>
    </SectionContainer>
  );
};
