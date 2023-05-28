import P from 'prop-types';
import * as Styled from './styles';
export const CustomLinks = ({ to, name }) => {
  return (
    <Styled.Wrapper>
      <a to={to}>{name}</a>
    </Styled.Wrapper>
  );
};

CustomLinks.propTypes = {
  to: P.string.isRequired,
  name: P.string,
};
