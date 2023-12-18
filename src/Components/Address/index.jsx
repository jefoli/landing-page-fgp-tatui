import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import { BsPinMap } from 'react-icons/bs';

export const Address = () => {
  return (
    <SectionContainer className="centralize" color="#f5cb11">
      <Styled.TextContent>
        <h1>CONHEÇA NOSSO POLO</h1>
        <p>Conheça nosso polo de apoio presencial em Tatuí-SP</p>
      </Styled.TextContent>
      <Styled.Wrapper>
        <h3>
          <BsPinMap /> Rua Onze de agosto, 1471, Centro, Tatuí - SP
        </h3>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14651.795202451845!2d-47.86824263022461!3d-23.353869400000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d923b739331b%3A0xf8fd1e2cd9ef3e61!2sR.%20Onze%20de%20Agosto%2C%201471%20-%20Jardim%20Lucila%2C%20Tatu%C3%AD%20-%20SP%2C%2018275-687!5e0!3m2!1spt-BR!2sbr!4v1684885864335!5m2!1spt-BR!2sbr"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Styled.Wrapper>
    </SectionContainer>
  );
};
