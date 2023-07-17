import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';

export const Card = ({
  title,
  months,
  hours,
  price,
  to,
  subscribe,
  summaryText,
}) => {
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
          <details>
            <summary>saiba mais</summary>
            <p>{summaryText}</p>
          </details>
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
  summaryText: P.string.isRequired,
};
