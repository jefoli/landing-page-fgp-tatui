import { Card } from '../Card';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const PostGraduation = () => {
  return (
    <SectionContainer color="#f5cb11">
      <Styled.Default>
        <div>
          <h2>
            oferecemos uma ampla gama de cursos de formação e desenvolvimento
            profissional para educadores (pós-graduação e extensão
            universitária) no formato online para flexibilizar sua capacitação,
            através de uma plataforma intuitiva, interativa e personalizada, a
            qual permite que o estudante adaptar-se o conteúdo programado às
            suas necessidades específicas
          </h2>
        </div>
        <h1>CURSOS DE PÓS-GRADUAÇÃO</h1>
        <Styled.Wrapper>
          <Card title="atendimento educacional especializado" />
          <Card title="arte e cultura afro-brasileira na educação" />
          <Card title="arte da educação" />
          <Card title="direito educacional" />
          <Card title="educação musical e ensino da arte" />
          <Card title="educação positiva" />
          <Card title="educação especial com ênfase em múltiplas deficiências" />
          <Card title="educação especial com ênfase em em TGD e superdotação" />
          <Card title="ensino da matemática na educação infantil e séries iniciais" />
          <Card title="neurociências e aprendizagem" />
          <Card title="neuropsicopedagogia" />
          <Card title="pedagogia humanísticas" />
          <Card title="psicopedagogia institucional" />
          <Card title="formação para educação a distância" />
          <Card title="ludopedagogia" />
          <Card title="orientação, supervisão e inspeção escolar" />
          <Card title="pedagogia da cooperação e metodologias colaborativas" />
        </Styled.Wrapper>
      </Styled.Default>
    </SectionContainer>
  );
};
