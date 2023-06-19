import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export const Card = ({ title }) => {
  return (
    <>
      <Styled.Wrapper>
        <div>
          <h4>{title}</h4>
          <p>Duração: 6 meses </p>
          <p> Carga horária: 450 horas</p>
          <p> Valor: R$ 98,00 (8x)</p>
        </div>
        <Styled.TextContent>
          <SubscribeBtn color="#f5cb11" />
          <span>
            <a>
              saiba mais <FiChevronsRight />
            </a>
          </span>
        </Styled.TextContent>
      </Styled.Wrapper>
    </>
  );
};

Card.propTypes = {
  title: P.string.isRequired,
};
