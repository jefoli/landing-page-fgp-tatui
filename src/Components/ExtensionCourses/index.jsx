import { Card } from '../Card';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
export const ExtensionCourses = () => {
  return (
    <SectionContainer color="black">
      <h1>CURSOS DE EXTENSÃO</h1>
      <h3>
        Descubra nossos cursos de extensão, criados para quem busca atualização
        profissional e enriquecimento pessoal. São diversas opções de temas,
        todos desenvolvidos com base nas últimas tendências do mercado e
        ministrados por profissionais renomados em suas áreas de atuação.
      </h3>
      <Styled.Wrapper>
        <Card title="direito educacional" colorButton={'white'} />
        <Card title="autismo: um desafio para educadores" />
        <Card title="cultura e arte afro-brasileira" />
        <Card title="educação ambiental" />
        <Card title="gestão e organização escolar" />
        <Card title="base nacional comum curricular (BNCC)" />
        <Card title="gestão de projetos educacionais" />
        <Card title="princípios da educação básica (LBD)" />
        <Card title="ferramentas e recursos educacionais" />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
