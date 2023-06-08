import { FaGraduationCap, FaUsers, FaLightbulb } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';

import * as Styled from './styles';

export const History = () => {
  return (
    <section className="section-container-image">
      <Styled.DefaultContainer className=" divflex">
        <h1>CONHEÇA NOSSA HISTÓRIA</h1>
        <div>
          <p>
            A FGP Polo Tatuí é uma referência no setor educacional. Desde 2012,
            estamos comprometidos em oferecer conhecimento e qualidade de ensino
            aos nossos estudantes.
          </p>
          <p>
            Com o passar do tempo, expandimos nosso polo para outras regiões,
            conquistando a confiança de alunos de cidades como Iperó, Laranjal
            Paulista, Tietê e Boituva.
          </p>
          <p>
            Continuamos evoluindo e inovando, incorporando tecnologias
            emergentes, como inteligência artificial e aprendizado adaptativo,
            em nossa plataforma. Isso nos permitiu alcançar um número ainda
            maior de educadores e impactar a educação em nossa região.
          </p>
          <p>
            Contamos com uma equipe de docentes composta por Mestres ou Doutores
            em suas respectivas áreas de atuação. Com toda essa bagagem de
            conhecimento, nossos docentes capacitam os alunos, indo além das
            simples aulas, proporcionando o uso de ferramentas essenciais para o
            ensino-aprendizagem.
          </p>
          <p>
            Nosso compromisso em capacitar e apoiar os professores permanece
            inabalável, pois eles continuam a moldar o futuro da educação em
            todo o mundo.
          </p>
        </div>
        <h2>NOSSA MISSÃO</h2>
        <Styled.MissionBox>
          <Styled.BoxContent>
            <Styled.BoxStyle>
              <TbTargetArrow className="teste12" />
              <h3>Formação de Excelência para a Transformação da Sociedade</h3>
              <p>
                Desenvolver competências e habilidades, formar e orientar
                profissionais alinhados com as exigências do cotidiano,
                promovendo o desenvolvimento contínuo e a transformação da
                sociedade.
              </p>
            </Styled.BoxStyle>
          </Styled.BoxContent>
        </Styled.MissionBox>

        <h2>conheça nossos pilares</h2>
        <Styled.BoxContent>
          <Styled.BoxStyle>
            <FaGraduationCap className="teste12" />
            <h3>excelência acadêmica</h3>
            <p>
              Promover a busca pela excelência acadêmica e preparando os alunos
              para suas futuras carreiras.
            </p>
          </Styled.BoxStyle>

          <Styled.BoxStyle>
            <FaUsers className="teste12" />
            <h3>diversidade e inclusão</h3>
            <p>
              Valorizar a diversidade em todas as suas formas e criando um
              ambiente inclusivo para todos os alunos.
            </p>
          </Styled.BoxStyle>

          <Styled.BoxStyle>
            <FaLightbulb className="teste12" />
            <h3>inovação e pesquisa</h3>
            <p>
              Fomentar a inovação e a pesquisa em diversas áreas de
              conhecimento, incentivando a descoberta de novos conhecimentos e
              avanços.
            </p>
          </Styled.BoxStyle>
        </Styled.BoxContent>
      </Styled.DefaultContainer>
    </section>
  );
};
