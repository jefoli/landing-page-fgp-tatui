import * as Styled from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children, color }) => {
  return <Styled.Wrapper color={color}>{children}</Styled.Wrapper>;
};

SectionContainer.propTypes = {
  children: P.node,
  color: P.string,
};
