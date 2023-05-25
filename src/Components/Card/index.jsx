import { SubscribeBtn } from '../Buttons/SubscribeBtn';
import P from 'prop-types';
import * as Styled from './styles';
export const Card = ({ title }) => {
  return (
    <Styled.Wrapper>
      <img
        className="card-img-top"
        src="https://mcusercontent.com/2dafcdc5d9de9a5136818d8ea/images/21a0f325-4a88-71d5-ee6c-1ed9f0dd2899.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>Duração: 6 meses Carga horária: 450 horas Valor: R$ 98,00 (8x)</h6>
        <SubscribeBtn />
      </div>
    </Styled.Wrapper>
  );
};

Card.propTypes = {
  title: P.string.isRequired,
};
