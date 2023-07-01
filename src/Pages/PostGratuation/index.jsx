import { SectionContainer } from '../../Components/SectionContainer';
import { Carousel } from '../../Components/Carousel';
import * as Styled from './styles';
import { postGradutationTitles } from './courses-postgradutation';

export const PostGraduation = () => {
  return (
    <SectionContainer>
      <Styled.Default>
        <h1>CURSOS DE PÓS-GRADUAÇÃO</h1>
        <p>
          Cursos desenvolvidos no formato online para flexibilizar sua
          capacitação, através de uma plataforma intuitiva, interativa e
          personalizada, a qual permite que o estudante adaptar-se o conteúdo
          programado às suas necessidades específicas
        </p>
        <Styled.Wrapper>
          <Carousel
            cardTitles={postGradutationTitles}
            months={'6'}
            hours={'420'}
            price={'98'}
          />
        </Styled.Wrapper>
      </Styled.Default>
    </SectionContainer>
  );
};
