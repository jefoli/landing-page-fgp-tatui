import { GenericButtonWithIcon } from '../GenericButtonWithIcon';
import P from 'prop-types';
import * as Styled from './styles';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const ButtonOpenCloseMenu = ({ visible, onClick }) => {
  return (
    <Styled.Button visible={visible} onClick={onClick}>
      <GenericButtonWithIcon ariaLabel="Open/Close Menu" title="Go to top" />
      {visible ? (
        <AiOutlineClose aria-label="Close menu" />
      ) : (
        <AiOutlineMenu aria-label="Open menu" />
      )}
    </Styled.Button>
  );
};

ButtonOpenCloseMenu.propTypes = {
  icon: P.element,
  visible: P.bool,
  onClick: P.func,
};
