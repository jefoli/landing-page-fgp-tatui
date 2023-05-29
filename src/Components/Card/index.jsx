import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export const Card = ({ title }) => {
  return (
    <Styled.Wrapper>
      <img
        src="https://www.fgp.edu.br/wp-content/uploads/2019/12/ALFABETIZACAO-E-LETRAMENTO.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5>Duração: 6 meses </h5>
        <h5> Carga horária: 450 horas</h5>
        <h6> Valor: R$ 98,00 (8x)</h6>
      </div>
      <div className="texts">
        <SubscribeBtn color="#f5cb11" />
        <span>
          <p>
            <a>
              saiba mais <FiChevronsRight />
            </a>
          </p>
        </span>
      </div>
    </Styled.Wrapper>
  );
};

Card.propTypes = {
  title: P.string.isRequired,
};
