import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export const Card = ({ title, months, hours, price, to }) => {
  return (
    <>
      <Styled.Wrapper>
        <img
          src="https://mcusercontent.com/2dafcdc5d9de9a5136818d8ea/images/3be505a3-3cb4-ebca-1bfe-42c293fcad60.jpg"
          alt=""
        />
        <Styled.InformationContainer>
          <h3>{title} </h3>
          <p>Duração: {months} meses </p>
          <p> Carga horária: {hours} horas</p>
          <p> Valor: R$ {price} (8x)</p>
        </Styled.InformationContainer>
        <Styled.TextContent>
          <SubscribeBtn to={to} />
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
};
