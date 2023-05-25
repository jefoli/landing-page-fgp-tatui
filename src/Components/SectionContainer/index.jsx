import * as Styled from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

SectionContainer.propTypes = {
  children: P.node,
};
