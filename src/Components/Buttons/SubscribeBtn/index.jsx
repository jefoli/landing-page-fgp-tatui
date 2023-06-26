import * as Styled from './styles';
import P from 'prop-types';
export const SubscribeBtn = () => {
  return (
    <Styled.Button
      href="https://form.respondi.app/g73B58vn"
      target="_blank"
      rel="noopener noreferrer"
    >
      inscreva-se
    </Styled.Button>
  );
};

SubscribeBtn.propTypes = {
  color: P.string,
};
