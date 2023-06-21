import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export const Card = ({ title }) => {
  return (
    <>
      <Styled.Wrapper>
        <div>
          <h3>{title}</h3>
          <p>Duração: 6 meses </p>
          <p> Carga horária: 450 horas</p>
          <p> Valor: R$ 98,00 (8x)</p>
        </div>
        <Styled.TextContent>
          <SubscribeBtn color="#f5cb11" />
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
};
