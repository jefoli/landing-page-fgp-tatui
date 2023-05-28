import * as Styled from './styles';
import P from 'prop-types';
export const SubscribeBtn = ({ color }) => {
  return <Styled.Button color={color}>inscreva-se</Styled.Button>;
};

SubscribeBtn.propTypes = {
  color: P.string,
};
