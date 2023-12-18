import P from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
export const CustomLinks = ({ to, name, icon }) => {
  return (
    <Styled.Wrapper>
      <Link to={to}>
        {icon} {name}
      </Link>
    </Styled.Wrapper>
  );
};

CustomLinks.propTypes = {
  to: P.string,
  name: P.string,
  icon: P.element,
};
