import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import * as Styled from './styles';
export const SectionSubscribe = () => {
  return (
    <>
      <Styled.Default className="section-container-image2">
        <Styled.Wrapper>
          <h2>Inscreva-se agora e garanta o seu futuro!</h2>
          <p>
            oferecemos uma ampla gama de cursos de formação e desenvolvimento
            profissional para educadores (pós-graduação e extensão
            universitária) no formato online para flexibilizar sua capacitação,
            através de uma plataforma intuitiva, interativa e personalizada, a
            qual permite que o estudante adaptar-se o conteúdo programado às
            suas necessidades específicas
          </p>
          <p>Não perca esta oportunidade única. Seu futuro não pode esperar!</p>
        </Styled.Wrapper>
        <SubscribeBtn color="#f5cb11" />
      </Styled.Default>
    </>
  );
};
