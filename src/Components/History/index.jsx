import { FaGraduationCap, FaUsers, FaLightbulb } from 'react-icons/fa';

export const History = () => {
  return (
    <section className="section-container-image">
      <div className="test12 divflex">
        <h1>CONHEÇA NOSSA HISTÓRIA</h1>
        <h2>a FGP polo Tatuí é uma referência no setor educacional</h2>
        <h5>
          A FGP polo Tatuí é a continuidade de um projeto que teve início em
          2012 com um nome um pouco diferente, mas a missão continua sendo
          oferecer conhecimento e qualidade de ensino para nossos estudantes.
        </h5>

        <h5>
          Isso permitiu que a empresa alcançasse um número ainda maior de
          educadores e, consequentemente, impactar a educação em nossa região.
        </h5>

        <h5>
          contamos com a equipe de docentes de Mestres ou Doutores em sua área
          de atuação. Com toda essa bagagem de conhecimento, nossos (as)
          docentes capacitam os alunos, muito além de apenas assistir aulas, mas
          fazer uso das ferramentas que serão essenciais para o ensino
          aprendizagem. Com o passar do tempo, expandimos nosso polo para outras
          regiões, onde conquistamos a confiança de alunos de outras cidades
          (Iperó, Laranjal Paulista, Tietê e Boituva).
        </h5>
        <h5>
          continuamos a evoluir e inovar, incorporando tecnologias emergentes,
          como inteligência artificial e aprendizado adaptativo em sua
          plataforma.
        </h5>
        <h5>
          Nosso compromisso em capacitar e apoiar os professores permanece
          inabalável, à medida que eles continuam a moldar o futuro da educação
          em todo o mundo.
        </h5>
        <div>
          <h2>NOSSA MISSÃO</h2>
          <div>
            <h5>
              A nossa missão é desenvolver competências e habilidades,
              direcionada a formação e orientação dos profissionais compatíveis
              com as exigências do seu cotidiano, promovendo o desenvolvimento
              contínuo e a transformação da sociedade por meio da assimilação de
              novos conhecimentos.
            </h5>
          </div>
        </div>

        <div>
          <h2>valores</h2>
          <div className="grid1">
            <div>
              <FaGraduationCap />
              <h3>excelência acadêmica</h3>
              <h6>
                Promovendo a busca pela excelência acadêmica e preparando os
                alunos para suas futuras carreiras.
              </h6>
            </div>
            <div>
              <FaUsers />
              <h3>diversidade e inclusão</h3>
              <h6>
                Valorizando a diversidade em todas as suas formas e criando um
                ambiente inclusivo para todos os alunos.
              </h6>
            </div>
            <div>
              <FaLightbulb />
              <h3>inovação e pesquisa</h3>
              <h6>
                Fomentando a inovação e a pesquisa em diversas áreas de
                conhecimento, incentivando a descoberta de novos conhecimentos e
                avanços.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
