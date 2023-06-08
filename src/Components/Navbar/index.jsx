import { useState } from 'react';
import { ButtonOpenCloseMenu } from '../Buttons/ButtonOpenCloseMenu';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { useHideOnScroll } from '../../utils';

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const isScrolled = useHideOnScroll();

  return (
    <Styled.Default className={` ${isScrolled ? 'scroll' : ''}`}>
      <ButtonOpenCloseMenu visible={visible} onClick={() => setVisible(true)} />

      <Styled.Wrapper visible={visible} onClick={() => setVisible(false)}>
        {' '}
        <Styled.Container>
          <MenuLink />
        </Styled.Container>
      </Styled.Wrapper>
    </Styled.Default>
  );
};
