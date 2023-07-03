import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export const Card = ({ title, months, hours, price, to, subscribe }) => {
  return (
    <>
      <Styled.Wrapper>
        <img src={to} alt="" />
        <Styled.InformationContainer>
          <h3>{title} </h3>
          <p>Duração: {months} meses </p>
          <p> Carga horária: {hours} horas</p>
          <p> Valor: R$ {price},00 (8x)</p>
        </Styled.InformationContainer>
        <Styled.TextContent>
          <SubscribeBtn to={subscribe} />
        </Styled.TextContent>
        <Styled.showMoreBtn>
          saiba mais <FiChevronsRight />
        </Styled.showMoreBtn>
      </Styled.Wrapper>
    </>
  );
};

Card.propTypes = {
  title: P.string.isRequired,
  months: P.string.isRequired,
  hours: P.string.isRequired,
  price: P.string.isRequired,
  to: P.any,
  subscribe: P.any,
};
