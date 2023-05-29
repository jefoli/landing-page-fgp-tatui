import { Card } from '../Card';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const PostGraduation = () => {
  return (
    <SectionContainer color="#f5cb11">
      <Styled.Default>
        <div>
          <h1>PÓS-GRADUAÇÃO ON-LINE</h1>
          <h2>
            Nós oferecemos uma ampla gama de cursos para ajudá-lo a alcançar
            seus objetivos
          </h2>
        </div>

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
