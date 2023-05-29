import { FaGraduationCap, FaUsers, FaLightbulb } from 'react-icons/fa';

export const History = () => {
  return (
    <section className="section-container-image">
      <div className="test12 divflex">
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

        <div>
          <h2>NOSSA MISSÃO</h2>
          <p>
            Nossa missão é desenvolver competências e habilidades, formar e
            orientar profissionais alinhados com as exigências do cotidiano,
            promovendo o desenvolvimento contínuo e a transformação da sociedade
            por meio da assimilação de novos conhecimentos.
          </p>
        </div>

        <div>
          <h2>valores</h2>
          <div className="grid1">
            <div>
              <FaGraduationCap />
              <h3>excelência acadêmica</h3>
              <p>
                Promovendo a busca pela excelência acadêmica e preparando os
                alunos para suas futuras carreiras.
              </p>
            </div>
            <div>
              <FaUsers />
              <h3>diversidade e inclusão</h3>
              <p>
                Valorizando a diversidade em todas as suas formas e criando um
                ambiente inclusivo para todos os alunos.
              </p>
            </div>
            <div>
              <FaLightbulb />
              <h3>inovação e pesquisa</h3>
              <p>
                Fomentando a inovação e a pesquisa em diversas áreas de
                conhecimento, incentivando a descoberta de novos conhecimentos e
                avanços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
