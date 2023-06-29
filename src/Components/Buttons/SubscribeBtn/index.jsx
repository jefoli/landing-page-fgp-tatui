import * as Styled from './styles';
import P from 'prop-types';
export const SubscribeBtn = ({ to }) => {
  return (
    <Styled.Button href={to} target="_blank" rel="noopener noreferrer">
      inscreva-se
    </Styled.Button>
  );
};

SubscribeBtn.propTypes = {
  color: P.string.isRequired,
  to: P.object.isRequired,
};
