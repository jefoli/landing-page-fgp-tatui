import P from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
export const CustomLinks = ({ to, name }) => {
  return (
    <Styled.Wrapper>
      <Link to={to}>{name}</Link>
    </Styled.Wrapper>
  );
};

CustomLinks.propTypes = {
  to: P.string,
  name: P.string,
};
