import { CustomLinks } from '../CustomLink';
import * as Styled from './styles';
import { BsPersonCircle } from 'react-icons/bs';

export const MenuLink = () => {
  return (
    <Styled.WrapperMenu>
      <CustomLinks to={'/'} name="Home" />
      <CustomLinks to={'/about'} name="Sobre a FPG" />
      <CustomLinks to={'/post-graduation'} name="pós-graduação" />
      <CustomLinks to={'/extensions-courses'} name="curso de extensão" />
      <CustomLinks
        name="portal ead"
        to={'https://www.fgp-ead.com.br/'}
        icon={<BsPersonCircle />}
      />
      <img src="../src/assets/images/logo_oficial.png" alt="" width="110" />
    </Styled.WrapperMenu>
  );
};
